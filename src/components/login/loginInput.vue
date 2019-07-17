<template>
    <div class="login_main">
        <div class="login_input">
            <span>用户名：</span>
            <input type="text" v-model="userName" class="inputBorder" placeholder="请输入用户名">
        </div>
        <div class="login_input">
            <span style="margin-right:16px">密码：</span>
            <input type="password" v-model="password" class="inputBorder" placeholder="请输入密码">
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginView',
    data () {
        return {
            userName: '',
            password: ''
        }
    },
    created: function() {
        
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    outline: none;
}
.login_main{
    width: 300px;
    margin: 20px 60px;
}
.login_input{
    width: 240px;
    height: 40px;
    line-height: 40px;
    margin: 0 30px 50px 0;
    color: #282828;
}
.inputBorder{
    border: none;
    background-color: rgba(255,255,255,0.7);
    height: 30px;
    border-radius: 4px;
    text-indent: 10px;
}
</style>
