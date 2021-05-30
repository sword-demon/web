// BOM 对象：浏览器对象模型，代指浏览器上的一些对象

/**
 * 1. window
 *  alert()
 *  confirm()
 *  prompt()
 *
 *  setInterval()
 *  setTimeout()
 * 2. location
 *  href
 *  hash
 *  url
 *  reload()
 * 3. screen
 * 4. history
 *  go()
 */


window.setTimeout(function () {
    // 2秒之后执行function的方法
    console.log("hello world"); // 延迟性的操作
}, 2000);

window.setInterval(function () {
    // 每一秒都在执行，周期性的执行
    console.log("hello world");
}, 1000);

var num = 0;
var timer = null
timer = setInterval(function () {
    num++;
    if (num > 5) {
        // 清除掉定时器
        clearInterval(timer);
        return;
    }
    console.log("num:" + num);
}, 1000);


console.log(location.host); // 打印服务器的名称
console.log(location.hostname); // 打印服务器的名称
console.log(location.href); // 打印服务器完整的url  跳转属性
console.log(location.pathname); // 打印地址栏的
console.log(location.port); // 打印端口
console.log(location.protocol); // 打印协议
console.log(location.search); // 打印 querystring


// 获取访问的每个查询字符串
function getQuerystring() {
    var qs = location.search.length ? location.search.substring(1) : '';
    var items = qs.length ? qs.split("&") : [];
    var item = null, name = null, value = null, args = {};
    for (var i = 0; i < items.length; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[0]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}

// 如何检测浏览器上的插件
console.log(navigator); // 有一个plugins的属性

function hasPlugin(name) {
    // 如果有插件返回true，反之亦然
    name = name.toLowerCase();
    for (var i = 0; i < navigator.plugins.length; i++) {
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            // 有此插件
            return true;
        } else {
            return false;
        }
    }
}

console.log(hasPlugin('Flash'));
