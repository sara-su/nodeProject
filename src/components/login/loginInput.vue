<template>
    <div class="login_main">
        <div class="login_error" v-if="loginError">
            <span>输入的用户名或密码有误</span>
        </div>
        <div class="login_input">
            <input type="text" v-model="userName" class="inputBorder" placeholder="请输入用户名">
            <span class="input_key">用户名：</span>
        </div>
        <div class="login_input">
            <input type="password" v-model="password" class="inputBorder" placeholder="请输入密码">
            <span class="input_key">密码：</span>
        </div>
        <div class="login_alert">
            <span class="input_key">记住用户名和密码</span>
            <input type="checkbox" class="alert_checkbox" v-model="passwordRemember">
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginView',
    data () {
        return {
            userName: '',
            password: '',
            passwordRemember: false, // 记住密码
            loginError: false
        }
    },
    created: function() {
        
    },
    watch: {
        userName: function() {
            console.log(this.userName)
            this.loginError = false
        },
        password: function() {
            console.log(this.password)
            this.loginError = false
        }
    },
    methods: {
        submitInput: function() {
            console.log(this.userName, this.password, this.passwordRemember)
            if (!this.userName.trim().length || !this.password.trim().length) {
                this.loginError = true
            }
        },
        cancelInput: function() {
            this.userName = ''
            this.password = ''
            this.passwordRemember = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    outline: none;
}
.login_main{
    width: 250px;
    margin: 30px auto;
    color: #565656;
}
.login_input{
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
}
.inputBorder{
    border: none;
    box-shadow: 0 0 3px #aeaeae inset;
    height: 30px;
    border-radius: 4px;
    text-indent: 10px;
    float: right;
}
.input_key{
    float: right;
}
.login_alert{
    width: 250px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.alert_checkbox{
    width: 14px;    
    height: 14px;
    float: right;
    margin: 8px;
}
.login_error{
    width: 200px;
    height: 20px;
    position: absolute;
    top: 200px;
    left: 155px;
    font-size: 12px;
    color: #ff0000;
}
</style>
