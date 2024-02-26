
const axios = require('axios');

// 定义要发送的数据
const data = {account_token: 'qGH7HBK4tbV16gvqYL5bYyxNCf3isWTVABiE0zYneC2jSC3NNKKEA7TwTgo0UWTt', lang: 'en' , os_type: '5' };

// 发送 POST 请求
axios.post('https://webapi.leigod.com/api/user/pause', data)
    .then(response => {
        console.log('返回值:', response.data);
    })
    .catch(error => {
        console.error('发生错误:', error);
    });