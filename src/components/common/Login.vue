<template>
  <div>
    <div class="root">
      <img
        src="~@/assets/img/logo.jpg"
        alt=""
      >
      <el-form
        ref="FormRef"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="账号"
          prop="username"
        >
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <div class="operation">
          <el-button
            type="danger"
            round
            @click="loginto"
          >登陆</el-button>
          <el-button
            type="danger"
            round
          >注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        username: '12321313',
        password: '123412'
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 5 到 7 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击登陆方法验证表单正确发送请求
    loginto () {
      this.$refs.FormRef.validate(async (vaild) => {
        if (vaild) {
          const { account: { id } } = await this.$get('/login/cellphone', { phone: 17770093437, password: 'perfume520' })
          window.sessionStorage.setItem('token', id)
          this.$message.success('登陆成功')
          this.$router.push('/home')
        } else {
          this.$message.error('账号或密码错误')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1022px;
  height: 670px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  img {
    width: 250px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
  }
  .el-form {
    position: absolute;
    top: 70%;
    left: 47%;
    transform: translate(-50%, -50%);
  }
  .operation {
    margin-left: 120px;
  }
}
</style>
