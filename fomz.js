/******************************

脚本功能：日杂相机——解锁VIP

*******************************

[rewrite_local]

^https:\/\/rzres86api\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/rzxj.js

^https:\/\/rzres86api\.imendon\.com\/v2\/advert\/homelist url reject

^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/?aid=5000546&version_code=4\.8\.0\.8&device_platform=iphone url reject



[mitm] 

hostname = rzres86api.imendon.com,rzres86api.imendon.com,api-access.pangolin-sdk-toutiao.com


// var youxiu = JSON.parse($response.body);youxiu.data.isValid = 1;youxiu.data.expiredTs = 4102415999;$done({body : JSON.stringify(youxiu)});
// var youxiu ='{"code":1,"msg":"ok","data":{"isValid":1,"expiredTs":4102415999}}';$done(JSON.stringify(youxiu));

// body = $response.body.replace(/\"isValid":\d+/g, '\"isValid":1')
// body = $response.body.replace(/\"expiredTs":\d+/g, '\"expiredTs":4102415999')
// $done({body});

*******************************/

body = $response.body.replace(/\"isValid":\d+/g, '\"isValid":1')
body = $response.body.replace(/\"expiredTs":\d+/g, '\"expiredTs":4102415999')
$done({body});
