// math 数学对象

console.log(Math.PI); // 圆周率

console.log(Math.E);

console.log(Math.LN10);
console.log(Math.LN2);

console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.SQRT2); // 2的平方根
console.log(Math.SQRT1_2);


var num = 24.3;
console.log(Math.ceil(num)); // 天花板函数  25
console.log(Math.floor(num)); // 地板函数   24
console.log(Math.round(num)); // 标准的四舍五入 24


// 随机数 random() 0 <= random < 1
console.log(Math.random());

// 1. 获取某个最小值到最大值之间的总数 (1~100)
// console.log(Math.floor(Math.random()))
// Math.random() * (max - min) + min;
console.log(Math.random() * 99 + 1);
console.log(Math.floor(Math.random() * 99 + 1))

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// 2. 获取随机颜色 rgb(0~255, 0~255, 0~255)
function randomColor() {
    var r = random(0, 256), g = random(0, 256), b = random(0, 256);
    // 模板字符串
    return `rbg(${r},${g},${b})`;
}

var rc = randomColor();
console.log(rc);
document.body.style.backgroundColor = rc;

// 3. 随机验证码 四位  数字 + 字母(大写)
function createCode() {
    // 设置默认的空的字符串
    var code = "";
    // 设置长度
    var codeLength = 4;
    // 后续数组的内容自己添加
    var random1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B'];
    for (var i = 0; i < codeLength; i++) {
        // 设置随机范围 0~12
        var index = random(0, 12)
        code += random1[index];
    }
    return code;
}

var code = createCode();
console.log(code);
