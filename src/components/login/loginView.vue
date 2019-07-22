<template>
    <div class="login_background">
        <div class="input_body" :class="selectModule==='login'?'login_body':'register_body'">
            <div class="input_header">
                <div class="header_button" :class="selectModule === 'login'?'fontColor_selected':''" @click="changeModule('login')">登陆</div>
                <div class="header_button" :class="selectModule === 'register'?'fontColor_selected':''" @click="changeModule('register')">注册</div>
                <div class="input_select">
                    <div class="select_button" :class="selectModule === 'login'?'background_slected':''"></div>
                    <div class="select_button" :class="selectModule === 'register'?'background_slected':''"></div>
                </div>
            </div>
            <!-- 登录和注册输入模块 -->
            <loginInput v-if="selectModule==='login'" ref="loginInput"></loginInput>
            <registerInput v-else ref="registerInput"></registerInput>
            <!-- 底部按钮 -->
            <div class="input_footer">
                <div class="footer_button" @click="submitInput">确定</div>
                <div class="footer_button" @click="cancelInput">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
import loginInput from './loginInput'
import registerInput from './registerInput'
export default {
    name: 'loginView',
    components: {
        loginInput,
        registerInput
    },
    data () {
        return {
            selectModule: 'login'
        }
    },
    created: function() {
        const a = {
            i: 1,
            toString: function() {
                return a.i++
            }
        }
        if (a ==1 && a==2 && a==3) {
            console.log('hello')
        }
        
    },
    methods: {
        promiseAll: function(promises) {
            return new Promise((resolve, reject) => {
                if (Object.prototype.toString.call(promises) === '[object Array]') {
                    let count = 0
                    let len = promises.length
                    let resolveArray = new Array(len)
                    for (let i = 0; i < len; i++) {
                        (function(i) {
                            Promise.resolve(promises[i]).then(res => {
                                count++
                                resolveArray[i] = res
                                if (count === len) {
                                    return resolve(resolveArray)
                                }
                            }).catch(error => {
                                return reject(error)
                            })
                        })(i)
                    }
                } else {
                    return reject('promises must be an Array')
                }
            })
        },
        findDuplicate: function(array) {
            let result = {}
            let resultArray = []
            array.forEach(item => {
                if (result[item]) {
                    result[item]++
                } else {
                    result[item] = 1
                }
            })
            Object.keys(result).forEach(key =>{
                if (result[key] > 1) {
                    resultArray.push(key)
                }
            })
            console.log(resultArray)
        },
        changeModule: function(module) {
            if (this.selectModule === module) {
                return
            }
            this.selectModule = module
        },
        submitInput: function() {
            if (this.selectModule === 'login') {
                this.$refs.loginInput.submitInput()
            } else {
                this.$refs.registerInput.submitInput()
            }
        },
        cancelInput: function() {
            if (this.selectModule === 'login') {
                this.$refs.loginInput.cancelInput()
            } else {
                this.$refs.registerInput.cancelInput()
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_background{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/login/home.jpg);
    background-size: 100%;
    position: relative;
}
.input_body {
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 0 5px #aeaeae;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.login_body{
    height: 380px;
}
.register_body{
    height: 470px;
}
.input_header {
    width: 100%;
    height: 60px;
}
.header_button{
    float: left;
    height: 50px;
    width: 50%;
    border: none;
    text-align: center;
    color: #565656;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
}
.input_select{
    width: 340px;
    height: 5px;
    border: none;
    float: left;
    background-color: rgba(255,255,255,0.2);
    margin: 0 29px;
}
.select_button{
    width: 50%;
    height: 100%;
    border: none;
    float: left;
}
.fontColor_selected{
    color: #007dff;
}
.background_slected{
    background-color: #007dff;
}
.input_footer{
    width: 250px;
    height: 35px;
    margin: 0 auto;
}
.footer_button{
    width: 85px;
    height: 100%;
    background-color: #007dff;
    border-radius: 5px;
    color: #fff;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
}
.footer_button:first-child {
    margin-right: 75px;
}
</style>
