// 字符串的一些方法

var str = "helloworld";
console.log(str.length); // 获取字符串的长度

console.log(str.charAt(1)); // e 获取指定位置的字符
console.log(str.charCodeAt(1)); // 101 获取指定的字符的对应的编码

console.log(str.concat("wujie")); // 字符串拼接， 可以传多个参数, 通常不使用它来拼接
// 使用 + 来进行多个字符的拼接

console.log(str.slice(2)); // 字符串切片，第一个参数：起始位置， 第二个参数：结束位置，左闭右开

console.log(str.substring(2)); // 和slice类似

console.log(str.substr(2, 4)); // 第二个参数表示你要返回的字符串的个数，从2往后4位


console.log(str.slice(-3)); // rld 倒数3个
console.log(str.slice(-3, -1)); // 相当于: str.slice(8, 10)


console.log(str.indexOf("o")); // 查找字符o在里面的索引 4
console.log(str.indexOf("o", 5)); // 查找字符o在里面的索引 从索引6的位置开始找 6
console.log(str.lastIndexOf("o")); // 从后往前找查找字符o在里面的索引 6
console.log(str.lastIndexOf("o", 6)); // 从后往前找查找字符o在里面的索引 从索引6开始往前找 4

var str_trim = "hello world dqwd dqwd q  dq ";
console.log(str_trim.trim()); // 清除字符串中多余的空格


var word = "hello virus";
console.log(word.toUpperCase()); // 将字符串转大写
console.log(word.toLowerCase()); // 将字符串转小写


// 查找当前字符在字符串中的所有位置
var case1 = "He unfolded the map and set it on the floor";
var arr = [];
var pos = str.indexOf("e"); // 1
console.log(pos);
while (pos > -1) {
    // 找到当前e字符对应的位置
    arr.push(pos);
    // 更新查找的位置
    pos = str.indexOf("e", pos + 1);
}

console.log(arr);

