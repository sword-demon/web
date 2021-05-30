// Date日期对象

var now = new Date();
console.log(now); // 输出中国标准时间

var xmas = new Date("December 25, 1995 13:30:00");
console.log(xmas);

// 常用方法
console.log(now.getDate()) // 获取月份的第几天
console.log(now.getMonth()) // 获取月份(0~11)
console.log(now.getFullYear()) // 获取年份
console.log(now.getDay()) // 获取一星期中的第几天(0~6)
console.log(now.getHours()) // 获取小时 (0~23)
console.log(now.getMinutes()) // 获取分钟 (0~59)
console.log(now.getSeconds()) // 获取秒 (0~59)

// 格式化输出日期
console.log(now.toDateString()); // 星期 月 日 年
console.log(now.toTimeString()); // 时分秒 时区
console.log(now.toLocaleDateString()); // 年月日
console.log(now.toLocaleTimeString()); // 时分秒

console.log(now.toUTCString());

// 显示数字时钟的格式时间
var hour = now.getHours();
var minute = now.getMinutes();
var seconds = now.getSeconds();
var temp = '' + (hour > 12 ? hour - 12 : hour);
console.log(temp);
if (hour == 0) {
    temp = '12';
}

temp = temp + (minute < 10 ? ':0' : ":") + minute
temp = temp + (seconds < 10 ? ':0' : ":") + seconds
temp = temp + (hour >= 12 ? ' P.M.' : " A.M.");
console.log(temp);


