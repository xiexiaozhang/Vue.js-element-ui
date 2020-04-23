let axios = require('axios')
let data = {
    "username": 'james',
    "password": "abc.123456"
}

axios.post('https://thdvuyup.lc-cn-n1-shared.com/1.1/login', data, { headers: { 'X-LC-Id': 'THdvUyuPJIEwd6DJqCY6jXcu-gzGzoHsz', 'X-LC-Key': 'Hq7b8Avv2wKzAfxRt1POfDYQ', 'Content-Type': 'application/json' } })
    .then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log('code:' + error.response.data.code + ' error:' + error.response.data.error)
    })