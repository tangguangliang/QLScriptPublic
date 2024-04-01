const https = require('https');

const postData = "__EVENTTARGET=ImageButton1&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwUJOTQzMzk5MDQ2DxYCHgVteXVpZAUcbzY1SjI1cU0xak1MYTROaGVGUmNzd1MwV1FRQRYCAgEPZBYCAgEPDxYCHgRUZXh0BQIyMGRkZP6HA7Uj%2BZyB7FqXg7pjjXHqeTys&__VIEWSTATEGENERATOR=EC889C94&__EVENTVALIDATION=%2FwEWAgKs9eDSBwLSwpnTCFdJsq6q2VVMUBaRXUjwQ%2BopkGCz";

const options = {
  hostname: 'wx.ganxibbs.com',
  path: '/hd/qiandao.aspx?shopid=d2766',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'Host': 'wx.ganxibbs.com',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'http://wx.ganxibbs.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309092b) XWEB/9079 Flue',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Referer': 'http://wx.ganxibbs.com/hd/qiandao.aspx?shopid=d2766',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cookie': 'ASP.NET_SessionId=jaknrnenpx0uag2gm35df0yj; myappid_wx4f9b937ccae987d8=o65J25qM1jMLa4NheFRcswS0WQQA; myuid_20201117=o65J25qM1jMLa4NheFRcswS0WQQA; myshopid_20201117=d2766; d2766=o65J25qM1jMLa4NheFRcswS0WQQA'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);
req.end();

// 使用动态导入来加载 node-fetch 模块
import('node-fetch').then(({ default: fetch }) => {
  const webhookURL = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=162f6ac7-dde5-4dba-b52f-720433bb06a7';

  const messageData = {
    msgtype: 'text',
    text: {
      content: '洗衣自助签到成功，请确认积分是否到账！'
    }
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Message sent:', data);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
});


