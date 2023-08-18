/******************************

脚本功能：日杂相机——解锁VIP

*******************************/

var youxiu = JSON.parse($response.body);youxiu.data.isValid = 1;youxiu.data.expiredTs = 4102415999;$done({body : JSON.stringify(youxiu)});
