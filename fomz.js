/******************************

脚本功能：日杂相机——解锁VIP

*******************************/

body = $response.body.replace(/\"isValid":\d+/g, '\"isValid":1')
body = body.replace(/\"expiredTs":\d+/g, '\"expiredTs":4102415999')
$done({body});
