if (!process.env.LEIGOD_ACCOUNT_TOKEN) { throw new Error('Missing LEIGOD_ACCOUNT_TOKEN'); }

const axios = require('axios');

// 定义要发送的数据
const data = {account_token: process.env.LEIGOD_ACCOUNT_TOKEN, lang: 'en' , os_type: '5' };

// 发送 POST 请求
axios.post('https://webapi.leigod.com/api/user/pause', data)
    .then(response => {
        console.log('返回值:', response.data);
    })
    .catch(error => {
        console.error('发生错误:', error);
    });