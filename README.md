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
