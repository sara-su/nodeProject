import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 5000,
        headers: {
        'content-type': 'application/json',
        'token': '14a1347f412b319b0fef270489f'
    }
})
export default {
    // get请求，其他类型请求复制粘贴，修改method
    get(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: param
            }).then(res => {
                // axios返回的是一个promise对象 
                let resCode = res.status.toString()
                if (resCode.charAt(0) === 2) {
                    resolve(res) // cback在promise执行器内部
                } else {
                    console.log(res, '异常1')
                }
            }).catch(err => {
                reject(err.response)
                console.log(err.response, '异常2')
            })
        })
    }
} 