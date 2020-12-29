<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-19 23:25:41
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-30 00:52:11
-->
<!-- 用户列表 -->
<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="brief-bar">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 列表视图 -->
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="8">
          <el-input
            placeholder="请输入用户姓名"
            v-model="select"
            class="input-with-select"
            clearable
            @clear="getUserList"
          >
            <el-button slot="append" icon="el-icon-search" v-model="select" @click="getSelect"></el-button>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-button
            type="primary"
            icon="el-icon-plus"
            style="color:white"
            @click="addDialogVisible = true"
          >添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户列表区域 -->
      <el-table
        :data="this.userlist.slice((this.currentPage -1)*this.pagesize,this.pagesize*this.currentPage)"
        border
        stripe
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="user_name" label="用户名"></el-table-column>
        <el-table-column prop="user_real_name" label="姓名"></el-table-column>
        <el-table-column prop="user_pwd" label="密码"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="user_add_time" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top" :enterable="false">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="showEditDialog(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="管理身份"
              placement="top"
              :enterable="false"
            >
              <el-button type="warning" icon="el-icon-setting" circle></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 25]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      ></el-pagination>

      <!-- 增加用户弹出窗口 -->
      <el-dialog
        title="添加用户"
        :visible.sync="addDialogVisible"
        width="35%"
        :before-close="handleClose"
        center
        @close="addDialogClose"
      >
        <el-form
          :model="addForm"
          status-icon
          :rules="addRules"
          ref="addForm"
          label-width="80px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="用户名" prop="user_name">
            <el-input v-model="addForm.user_name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="user_pwd">
            <el-input type="password" v-model="addForm.user_pwd" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="user_real_name">
            <el-input v-model="addForm.user_real_name"></el-input>
          </el-form-item>
          <el-form-item label="用户身份" prop="user_role">
            <el-select v-model="addForm.user_role" placeholder="请选择用户身份">
              <el-option label="超级管理员" value="1"></el-option>
              <el-option label="普通用户" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false" style="color:black">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 修改信息窗口 -->
      <el-dialog
        title="修改信息"
        :visible.sync="editDialogVisible"
        width="35%"
        :before-close="handleClose"
        @close="editDialogClose"
      >
        <el-form
          :model="editForm"
          status-icon
          :rules="editRules"
          ref="editForm"
          label-width="80px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="用户名">
            <el-input v-model="editForm.user_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="user_pwd">
            <el-input v-model="editForm.user_pwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="user_real_name">
            <el-input v-model="editForm.user_real_name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false" style="color:black">取 消</el-button>
          <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import userapi from '@/api/user.js'
export default {
  name: 'UserList',
  created () {
    this.getUserList()
  },
  data () {
    // 验证用户名是否重复
    var checkSameUsername = (rule, value, callback) => {
      let msg
      console.log(value)
      this.isSame(value).then(res => {
        msg = res.data
        if (msg.status == 1) {
          callback()
        } else {
          callback(new Error(msg.msg))
        }
      })
    }

    return {
      select: '',
      // 查看用户列表的页面和页面大小
      queryInfo: {
        pagenum: '1',
        pagesize: ''
      },

      // 用户总数
      total: 0,

      // 用户列表
      userlist: [],

      // 当前页面的展示数据的多少
      pagesize: 5,

      // 当前所在页面
      currentPage: 1,

      addDialogVisible: false,

      // 添加窗口数据
      addForm: {
        user_name: '',
        user_pwd: '',
        user_real_name: '',
        user_role: '',
        user_add_time: ''
      },

      // 增加用户窗口规则
      addRules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
          { validator: checkSameUsername, trigger: 'blur' }
        ],
        user_pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        user_real_name: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
        ],
        user_role: [
          { required: true, message: '请选择用户身份', trigger: 'blur' },
        ],
      },

      editDialogVisible: false,

      // 编辑窗口数据
      editForm: {
        user_id: '',
        user_name: '',
        user_pwd: '',
        user_real_name: '',
      },

      // 增加用户窗口规则
      editRules: {
        user_pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        user_real_name: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    async getUserList () {
      await userapi.listuser(this.queryInfo).then(res => {
        // console.log(res.data)
        this.total = res.data.total
        this.userlist = res.data.userList
      })
    },
    async getSelect () {
      await userapi.selectuser(this.select).then(res => {
        // console.log(res.data)
        this.total = res.data.total
        this.userlist = res.data.users
      })
    },
    async isSame (username) {
      return await userapi.sameuser(username)
    },
    // 更换页面储存条数
    handleSizeChange (val) {
      this.pagesize = val
    },

    // 更换当前所在页面
    handleCurrentChange (val) {
      this.currentPage = val
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },

    // 关闭增加窗口时的操作
    addDialogClose () {
      this.$refs.addForm.resetFields()
    },

    // 添加用户
    addUser () {
      this.$refs.addForm.validate(async valid => {
        if (valid) {
          this.addForm.user_role = parseFloat(this.addForm.user_role)
          this.addForm.user_add_time = new Date().toLocaleDateString()
          await userapi.adduser(this.addForm).then(res => {
            if (res.data.status == 1) {
              this.$message.success(res.data.msg)
            } else {
              this.$message.error(res.data.msg)
            }
          })
          this.getUserList()
          this.addDialogVisible = false
        }
      })
    },

    // 修改窗口
    showEditDialog (user) {
      this.editDialogVisible = true
      this.editForm.user_id = user.user_id
      this.editForm.user_name = user.user_name
      this.editForm.user_pwd = user.user_pwd
      this.editForm.user_real_name = user.user_real_name

    },

    // 关闭编辑窗口时的操作
    editDialogClose () {
      this.$refs.editForm.resetFields()
    },
  }
}

</script>
<style scoped>
@import '../../../public/css/componentsstyle.css';
.el-table {
  margin-top: 20px;
}
.el-button {
  color: white;
}
.el-pagination {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>