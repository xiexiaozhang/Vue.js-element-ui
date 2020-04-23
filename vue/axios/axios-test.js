let axios = require('axios')
let data = {
        "username": 'james',
        "password": "abc.123456"
    }
    //如果是第三方api需要添加下列参数
    // { headers: { 'X-LC-Id': '应用id', 'X-LC-Key': '应用key', 'Content-Type': 'application/json' } }
    //发送post请求
axios.post('https://thdvuyup.lc-cn-n1-shared.com/1.1/login', data)
    .then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log('code:' + error.response.data.code + ' error:' + error.response.data.error)
    })