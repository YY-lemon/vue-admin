<template>
    <div class="login">
        <el-form ref="refForm" :model="form" class="container" :rules="rules">
            <el-form-item >
                <div class="avatar">
                    <img src="../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="账号" prefix-icon="myicon myicon-user">账号</el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="密码" prefix-icon="myicon myicon-key" type="password">密码</el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="loginBtn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
            
</template>
<script>
import {checkLogin} from '@/api/api.js'
export default {
    data () {
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        loginBtn() {
            this.$refs.refForm.validate(valide => {
                if(valide) {
                    checkLogin(this.form).then(res => {
                        // console.log(res)
                        if(res.meta.status === 200) {
                            this.$router.push({name:'Home'})
                            localStorage.setItem('mytoken',res.data.token)
                        } else {
                            this.$message({
                                message: res.meta.msg,
                                type: 'error'
                            })
                        }
                    })
                } else {
                    console.log('验证不通过')
                }
            })   
        }    
    }
}
</script>
<style lang="scss" scoped>
    .login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>


