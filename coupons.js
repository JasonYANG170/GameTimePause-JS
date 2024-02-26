if (!process.env.LEIGOD_ACCOUNT_TOKEN) { throw new Error('Missing LEIGOD_ACCOUNT_TOKEN'); }
const fetch = require("node-fetch");
// 定义 POST 请求的 URL
const url = 'https://webapi.leigod.com/api/user/pause';
// 创建要发送的数据对象
const data = { account_token: process.env.LEIGOD_ACCOUNT_TOKEN, lang: 'en' , os_type: '5'};

// 发送 POST 请求
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json()) // 解析返回的 JSON 数据
    .then(data => {
        console.log('返回值:', data); // 打印返回值到控制台
    })
    .catch((error) => {
        console.error('发生错误:', error);
    });