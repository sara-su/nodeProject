<template>
    <div class="login_background">
        <div class="input_body">
            <div class="input_header">
                <div class="header_button" :class="selectModule === 'login'?'fontColor_selected':''" @click="changeModule('login')">登陆</div>
                <div class="header_button" :class="selectModule === 'register'?'fontColor_selected':''" @click="changeModule('register')">注册</div>
                <div class="input_select">
                    <div class="select_button" :class="selectModule === 'login'?'background_slected':''"></div>
                    <div class="select_button" :class="selectModule === 'register'?'background_slected':''"></div>
                </div>
            </div>
            <loginInput></loginInput>
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_background{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/login/background.jpg);
    background-size: 100%;
    position: relative;
}
.input_body {
    width: 400px;
    height: 420px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    color: #acacac;
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
    color: #232446;
}
.background_slected{
    background-color: #232446;
}
</style>
