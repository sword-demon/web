# web
## css的三种引入方式的优先级

内联式 > 嵌入式 > 外部式

嵌入式大于外部式的前提是有一个内联式。外加浏览器有一个从上而下的顺序执行。

> 后代选择器

```css
/* 只针对 div 下的 a 标签进行设置颜色 */
div a {
	color: orange;
}
```

> 子代选择器

上述的div下面的a，可能一个网页里有很多地方都有，所以就得确定这个只是你的子孙标签，再在最外层设置一层标签设置类选择器

语法为:`>`

```css
/*亲儿子*/
.wrap>a {
	color: orange;
}
```

> 交集选择器

```css
选择器1 选择器2 {
	样式属性: 属性值
}
```

```css
h2 {
	color: red;
}

.active {
	font-weight: lighter;
}

/*交集选择器*/
h2.active {
	font-size: 14px;
}
```

> 伪类选择器

```css
/*没有被访问过的a的状态*/
a:link {
    color: orange;
}

/*访问过后的a的状态*/
a:visited {
    color: green;
}

/*鼠标悬浮时a的状态*/
a:hover {
    color: black;
}

/*鼠标按住时a的状态*/
a:active {
    color: cyan;
}

.form-control:hover {
    color: aqua;
}
```

```html
<a href="#">伪类选择器</a>
<input type="text" class="form-control">
```

> 选择器权重

- 内联样式权重1000
- id选择器权重100
- 类选择权重10
- 元素选择器权重为1

权重计算用不进位；继承来的属性权重非常低

> `!important`

为了覆盖行内的样式

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小米商城</title>

    <style>
        div {
            color: purple !important;
        }
    </style>
</head>
<body>

<div style="color:red;">a</div>
</body>
</html>
```

一般不在当前页面里面使用

## 元素分类

块元素：

- 独占一行
- 可以设置宽高，如果不想设置宽度，默认是父标签的100%宽度

行内元素：

- 在一行内显示
- 不能设置宽高，默认的宽高为文本内容占据的宽高

行内块元素的特点

- 在一行内显示
- 可以设置宽高

## display显示属性

控制元素显示的属性，显示方式

块级元素：`display: block;`

行内元素：`display: inline;`

行内块元素：`display: inline-block;`

## 盒模型

`css model` 这一术语是用来设计和布局时使用

所有`html` 元素可以看做盒子

它包括：`外边距、边框、内填充和实际内容`。

方向都遵循：顺时针方向，上右下左

### 案例：小米商城顶部导航栏

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小米商城</title>
    <style>
        a {
            text-decoration: none;
        }
        .top_bar {
            width: 100%;
            height: 40px;
            background-color: #333;
        }
        .top_bar a {
            color: #b0b0b0;
            line-height: 40px;
            /*background-color: green;*/
            display: inline-block;
        }
        .top_bar a:hover {
            color: #fff;
        }
        .top_bar span {
            color: #424242;
        }
    </style>
</head>
<body>
<div class="top_bar">
    <a href="#">小米商城</a>
    <span>|</span>
    <a href="#">MIUI</a>
    <span>|</span>
    <a href="#">IOT</a>
    <span>|</span>
    <a href="#">云服务</a>
</div>

</body>
</html>
```

### padding

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>padding</title>
    <style>
        div {
            width: 180px;
            height: 180px;
            background-color: green;
            /*设置盒子边框上方到内容的距离为20px*/
            /*padding-top: 20px;*/
            /*padding-left: 20px;*/
            /*设置上下左右*/
            /*padding: 20px ;*/
            /*设置上下20px 左右40px*/
            /*padding: 20px 40px;*/
            /*设置上20px 左右30px 下40px*/
            /*padding: 20px 30px 40px;*/
            /*设置上20px 右30px 下40px 左50px*/
            padding: 20px 30px 40px 50px;
        }
    </style>
</head>
<body>
<!--内边距，盒子边框到内容的距离，不指定哪个方向的边距，则表示上下左右的都是那个设定的数值-->
<div>wujie</div>
</body>
</html>
```

### border

按照三要素编写border

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>边框border</title>
    <style>
        .border {
            width: 200px;
            height: 200px;
            /*border: 1px solid red;*/
            border-width: 4px 10px;
            /*上：实线 右：点线 下：双线 左：虚线*/
            border-style: solid dotted double dashed;
            border-color: red green purple yellow;
        }
    </style>
</head>
<body>
<!--三要素: 宽度：粗细 样式 颜色-->
    <div class="border">手机壳</div>
</body>
</html>
```

按照方向来编写order

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>边框border</title>
    <style>
        .border {
            width: 200px;
            height: 200px;
            border-top-width: 4px;
            border-left-width: 10px;
            border-top-style: solid;
            border-top-color: orange;
        }
    </style>
</head>
<body>
<!--三要素: 宽度：粗细 样式 颜色-->
    <div class="border">手机壳</div>
</body>
</html>
```
### margin：外边距，一个盒子到另外一个盒子的距离

也有四个方向

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>margin</title>
    <style>
        span {
            background-color: red;
        }
        .xiongda {
            margin-right: 20px;
        }
        /*水平方向的之间的距离是两者加起来的距离*/
        .xionger {
            margin-left: 100px;
        }
        div {
            width: 200px;
            height: 200px;
        }
        /*margin垂直方向上会出现外边距合并，小的合并到大的值里去，也称之为外边距塌陷，取大的值*/
        .box1 {
            background-color: green;
            margin-bottom: 30px;
        }
        .box2 {
            background-color: red;
            margin-top: 100px;
        }
    </style>
</head>
<body>
<!--外边距：一个盒子到另一个盒子的距离-->
<span class="xiongda">熊大</span>
<span class="xionger">熊二</span>
<div class="box1"></div>
<div class="box2"></div>
</body>
</html>
```

## float浮动

属性

[浮动的属性](https://www.notion.so/f1b56511ca834f82b36fe49cd1b8500a)

### 浮动现象

```
浮动的现象
    1. 文字环绕
    2. 脱离了标准文档流
    3. 浮动元素相互贴靠
    4. 浮动元素有收缩现象 且收缩的宽度和内容的宽度一致
```

### 清除float方式

1. 给父元素设置固定高度
   缺点： 使用不灵活，后期不易维护
   应用：网页中盒子固定高度的区域，比如固定的导航栏
2. 内墙法
   规则：在最后一个浮动元素的后面加空的块级元素，并且设置该属性为 clear：both
   缺点：结构冗余
3. 伪元素清除
4. overflow: hidden;

默认为static静态定位

### 相对定位

不脱离标准文档流，可以调整元素

参考点：以原来的位置为参考点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定位: 相对定位</title>
    <style>
        body {
            border: 1px solid orange;
        }
        div {
            width: 200px;
            height: 200px;
            color: #fff;
        }
        div.one {
            background-color: red;
            /*相对于原来的位置进行移动*/
            position: relative;
            top: 30px;
            left: 100px;
        }
        div.two {
           background-color: green;
            position: relative;
            top: 100px;
        }
        div.three {
            background-color: blue;
        }
    </style>
</head>
<body>
<!--position：默认为static静态定位
    1. 相对定位 relative
    2. 相对定位 absolute
    3. 固定定位 fixed
    -->
<div class="one">one</div>
<div class="two">two</div>
<div class="three">three</div>
</body>
</html>
```

## 绝对定位

```
特点：
1. 脱离标准文档流，不在页面上占位置
2. 压盖现象
```

参考点：

单独给一个盒子设置绝对定位，以根元素页面左上角为参考点

> 相对于最近的非static祖先元素定位，如果没有非static祖先元素，那么以页面根元素左上角进行定位。

网站中的实战应用："子绝父相"

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位</title>
    <style>
        body {
            border: 1px solid orange;
        }

        .grandfather {
            position: relative;
            top: 30px;
            left: 20px;
            border: 1px solid purple;
        }

        .father {
            /*position: relative;*/
            /*top: 30px;*/
            /*left: 30px;*/
            border: 1px solid black;
            margin-left: 40px;
        }

        .one, .two, .three {
            width: 200px;
            height: 200px;
            color: #fff;
        }

        div.one {
            background-color: red;
            position: absolute;
            /*以页面HTML的左上角为参考点*/
            top: 200px;
            left: 200px;
        }

        div.two {
            width: 400px;
            background-color: green;
            /*position: absolute;*/
        }

        div.three {
            background-color: blue;
        }
    </style>
</head>
<body>
<!--
特点：
1. 脱离标准文档流，不在页面上占位置
2. 层级提高，压盖现象
-->
<div class="grandfather">
    <div class="father">
        <div class="one">one</div>
        <div class="two">two</div>
        <div class="three">three</div>
    </div>
</div>

</body>
</html>
```

## 固定定位

和绝对定位相似

特点：

1. 脱离标准文档流
2. 一旦设置固定定位，在页面中滚动网页，固定不变

参考点：

以浏览器的左上角为参考点

应用：

小广告，回到顶部，固定导航栏



