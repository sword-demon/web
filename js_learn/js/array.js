var a = [1, 2, 3, 4, 5];
console.log(a, typeof a);

// 依靠访问
var item1 = a[1];
console.log(item1);

// 重新赋值
a[1] = "无解"
console.log(a);

// 获取数组的长度
console.log("数组的长度是:" + a.length);

// 数组的常用方法
// toString(); 将数组以字符串的形式输出

var b = a.toLocaleString();
console.log(b);


var person1 = {
    toLocaleString: function () {
        return 'wujie';
    },
    toString: function () {
        return '隔壁老王';
    }
}

var person2 = {
    toLocaleString: function () {
        return 'dqdwqdq';
    },
    toString: function () {
        return '隔壁dwqdqwdqw老王';
    }
}

var people = [person1, person2];
console.log(people);
console.log(people.toString()); // 隔壁老王,隔壁dwqdqwdqw老王
console.log(people.toLocaleString()); // wujie,dqdwqdq

// 数组的 join 方法
var colors = ["blue", "red", "green"];
console.log(colors.join(',')); // 以指定字符进行分割打印出字符串

// 数组的栈（lifo last in first out 后进先出）方法，队列方法(fifo 先进先出)

// push 网数组最后添加一个内容
var newLength = colors.push("purple");
console.log(newLength);
console.log(colors);

// pop 删除数组最后一项 返回删除的元素
var lastItem = colors.pop();
console.log(lastItem);
console.log(colors);

// unshift 网数组的第一项添加内容，返回数组的新的长度
var fifo_new_length = colors.unshift("yellow");
console.log(fifo_new_length)
console.log(colors);

// shift 将数组的第一项进行删除,返回删除的元素
var firstItem = colors.shift();
console.log(firstItem);
console.log(colors);

// 数组的排序
var values = [0, 3, 2, 1, 2, 32, 16, 10];

// 数组的反转
// values.reverse();
// console.log(values);

// sort() 数组的排序 升序 降序
// values.sort(); // 默认以升序排列,以字符编码进行排序
// console.log(values)

function asc(a, b) {
    // 如果a位于b之前
    // if (a < b) {
    //     return -1;
    // } else if (a > b) {
    //     return 1;
    // } else {
    //     return 0;
    // }
    // 简写
    return a - b;
}

function desc() {
    // 如果a位于b之前，就是小的，就返回真
    // if (a < b) {
    //     return 1;
    // } else if (a > b) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return b - a;
}

values.sort(asc);   // 升序的功能
console.log(values);

values.sort(desc); // 倒序功能
console.log(values);


// 常见的操作方法
// concat() slice() splice()

// concat() 数组合并 会添加到数组的末尾
var new_colors = colors.concat("green");
console.log(new_colors);

// 添加一个对象到数组, 可以传多个参数,可以是任意的类型，但是都会添加到新的数组里
colors.concat({"name": "张三"});

// slice() 不会影响原来的数组, 从指定位置去切原来的数组, 返回一个切割之后新的数组
var slice_arr = new_colors.slice(1, 2); // 数组索引的起始位置和结束位置，左闭右开,可以传负数,和python切片差不多
// 不能起始位置在右边，结束位置在左边，否则就会返回一个空的数组
console.log(new_colors);
console.log(slice_arr);

// splice()
/**
 * 最为强大的功能
 * 1. 删除
 * 2. 插入
 * 3. 替换
 */
var names = ["张三", "李四", "王五", "sb"];
// 从0开始删除2个元素,影响了原来的数组
names.splice(0, 2);

// 插入从索引1位置开始插入一个数据 jack 第二项为0，代表不进行删除操作
names.splice(1, 0, 'jack');
console.log(names);

// 替换 把索引1位置的元素删除，并添加一个新的元素，以作为替换的操作
names.splice(1, 1, '熊大');
console.log(names);


// ======================================
// 数组的位置方法 indexOf() lastIndexOf() 第一个参数：要查找数组中的哪个元素，第二个参数从哪里开始查找
// 前者从前往后查，后者从后往前查
var users = ["张三", "李四", "王五", "李四", "赵六"];
console.log(names.indexOf("李四")); // 直接返回该元素的索引值 1
console.log(names.lastIndexOf("李四")); // 直接返回该元素的索引值 3
console.log(names.indexOf("李四", 2)); // 直接返回该元素的索引值 3 从王五开始往后查
console.log(names.lastIndexOf("李四", 2)); // 直接返回该元素的索引值 1 从王五开始往前查


// 数组的迭代方法
/**
 * 1. filter() 过滤方法
 * 2. map() 映射
 * 3. forEach() 数组的遍历
 */

var numbers = [1, 2, 23232, 2131, 21, 21, 121, 9, 2];
/**
 * item: 数组的每一项元素
 * index: 数组的索引
 * array: 当前的数组
 * return: 返回一个过滤的结果
 */
var filter_res = numbers.filter(function (item, index, array) {
    // 过滤出大于10 的
    return item > 10;
});
console.log(filter_res); // [23232, 2131, 21, 21, 121];

var map_res = numbers.map(function (item, index, array) {
    // 将里面的数值都变成一个偶数
    return item * 2;
});
console.log(map_res);

// 遍历数组 第三个参数可以忽略不写
map_res.forEach(function (item, index, array) {
    console.log(item);
});
