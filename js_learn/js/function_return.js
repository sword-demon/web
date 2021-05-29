// 加法
function addition(a, b) {
    return a + b;
}
// 减法
function subtraction(a, b) {
    return a - b;
}
// 乘法
function multiplication(a, b) {
    return a * b;
}
// 除法
function division(a, b) {
    return a / b;
}

var result1 = addition(3, 2);
var result2 = subtraction(3, 2);
var result3 = multiplication(3, 2);
var result4 = division(3, 2);
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

// 函数表达式 也可以称之为匿名函数
var test = function (a, b) {
    return a + b;
}

console.log(test);

// 函数作用域

var a = 1; // 全局作用域
console.log(a); // 1

function test1() {
    // 局部作用域
    var b = 1;
}
