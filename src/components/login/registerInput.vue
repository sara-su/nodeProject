<template>
    <div class="register_main">
        <div class="register_input">
            <input type="text" v-model="userName" class="inputBorder" placeholder="请输入手机号或者邮箱">
            <span class="input_key">用户名：</span>
            <div class="errorAlert" v-if="userNameError">{{userNameErrorText}}</div>
        </div>
        <div class="register_input">
            <input type="password" v-model="password" class="inputBorder" placeholder="请输入密码">
            <span class="input_key">密码：</span>
            <div class="errorAlert" v-if="passwordError">{{passwordErrorText}}</div>
        </div>
        <div class="register_input">
            <input type="password" v-model="passwordcheck" class="inputBorder" placeholder="请输入密码" @blur="checkPassword">
            <span class="input_key">确认密码：</span>
            <div class="errorAlert" v-if="passwordCheckError">{{passwordCheckErrorText}}</div>
        </div>
        <div class="register_input">
            <input type="password" v-model="nickName" class="inputBorder" placeholder="请输入昵称">
            <span class="input_key">昵称：</span>
            <div class="errorAlert" v-if="nickNameError">{{nickNameErrorText}}</div>
        </div>
        <div class="register_input">
            <input type="password" v-model="checkNum" class="inputBorder" placeholder="请输入验证码">
            <span class="input_key">验证码：</span>
            <div class="errorAlert" v-if="checkNumError">{{checkNumErrorText}}</div>
            <div class="check_num">szda</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registerView',
    data () {
        return {
            userName: '',
            password: '',
            passwordcheck: '',
            nickName: '',
            checkNum: '',
            userNameErrorText: '',
            passwordErrorText: '',
            passwordCheckErrorText: '',
            nickNameErrorText: '',
            checkNumErrorText: '',
            userNameError: false, // 用户名错误
            passwordError: false, // 密码错误
            passwordCheckError: false, // 密码不匹配
            nickNameError: false, // 昵称已存在
            checkNumError: false, // 验证码不匹配
        }
    },
    watch: {
        userName: function() {
            let len = this.userName.length
            let hasError = false
            for (let i = 0; i < len; i++) {
                let code = this.userName.charCodeAt(i)
                if ((code >= 48 && code <= 57) || (code >= 64 && code <= 90) || (code >= 97 && code <= 122) || code === 95 || code === 45 || code === 46) {
                } else {
                    hasError = true
                    break
                }
                
            }
            if (hasError) {
                this.userNameError = true
                this.userNameErrorText = '用户名格式有误'
            } else {
                this.userNameError = false
                this.userNameErrorText = ''
            }
        },
        password: function() {
            let len = this.password.length
            let hasError = false
            for (let i = 0; i < len; i++) {
                let code = this.password.charCodeAt(i)
                if ((code >= 48 && code <= 57) || (code >= 64 && code <= 90) || (code >= 97 && code <= 122) || code === 95) {
                } else {
                    hasError = true
                    break
                }
                
            }
            if (hasError) {
                this.passwordError = true
                this.passwordErrorText = '密码只能包含数字、下划线、“_”、“@”'
            } else {
                this.passwordError = false
                this.passwordErrorText = ''
            }
        },
        passwordcheck: function() {
            this.passwordCheckError = false
            this.passwordCheckErrorText = ''
        }
    },
    created: function() {
        
    },
    methods: {
        checkPassword: function() {
            if (this.password !== this.passwordcheck) {
                this.passwordCheckError = true
                this.passwordCheckErrorText = '与第一次输入密码不符'
            }
        },
        submitInput: function() {
            console.log(this.userName, this.password, this.passwordRemember)
        },
        cancelInput: function() {
            this.userName = ''
            this.password = ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    outline: none;
}
.register_main{
    width: 250px;
    margin: 20px auto;
    color: #565656;
}
.register_input{
    height: 50px;
    line-height: 40px;
    margin: 10px 0;
    position: relative;
}
.inputBorder{
    border: none;
    box-shadow: 0 0 3px #aeaeae inset;
    height: 30px;
    margin: 5px 0;
    border-radius: 4px;
    text-indent: 10px;
    float: right;
}
.register_alert{
    width: 300px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.alert_checkbox{
    width: 14px;    
    height: 14px;
    vertical-align: middle;
}
.input_key{
    float: right;
}
.errorAlert{
    width: 100%;
    height: 20px;
    position: absolute;
    font-size: 12px;
    color: #ff0000;
    top: 38px;
    line-height: 20px;
    left: 81px;
}
.check_num{
    width: 50px;
    height: 30px;
    position: absolute;
    left: 260px;
    top: 5px;
    border-radius: 2px;
    background-color: #c6c6c6;
    text-align: center;
    line-height: 30px;
}
</style>
