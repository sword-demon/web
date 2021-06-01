// 获取待完成的表格对象
var todos_tbody_table = $("#todos_table tbody");
// 获取完成的表格对象
var done_tbody_table = $("#done-table tbody");

// 页面加载时 加载的内容
window.onload = function () {

    // 渲染未完成的内容
    tdObj.todos.forEach(function (item) {
        var tr = $("<tr>" +
            "<td class='col-9'>" + item + "</td>" +
            "<td><button data-key='todos' data-item='" + item + "' onclick='completeTask(this)' class='btn btn-sm btn-success'>完成</button></td>" +
            "<td><button data-key='todos' data-item='" + item + "' onclick='removeTodosTask(this)' class='btn btn-sm btn-danger'>删除</button></td>"
            + "</tr>");
        todos_tbody_table.append(tr);
    });

    // 渲染已完成的内容
    tdObj.done.forEach(function (item) {
        var tr = $("<tr>"
            + "<td class='col-9'>" + item + "</td>"
            + "<td><button data-key='done' data-item='" + item + "' onclick='removeDoneTask(this)' class='btn btn-sm btn-danger'>删除</button></td>"
            + "</tr>");
        done_tbody_table.append(tr);
    });

    // 获取未完成的个数
    var todos_count = tdObj.getTodosLength();
    // 获取已完成的个数
    var done_count = tdObj.getDoneLength();
    // 获取总数
    var total_count = todos_count + done_count;

    $(".todos_count").text(todos_count);
    $(".done_count").text(done_count);
    $(".total_count").text(total_count);

}

/**
 * 完成任务
 * @param obj
 */
function completeTask(obj) {
    var key = $(obj).data("key");
    var item = $(obj).data('item');
    var res = tdObj.complete(item);
    if (res) {
        alert("任务完成");
        window.location.reload();
        tdObj.resetCache();
    }
}

/**
 * 删除未完成的任务
 * @param obj
 */
function removeTodosTask(obj) {
    var key = $(obj).data("key");
    var item = $(obj).data("item");
    var res = tdObj.removeTask(key, item);
    if (res) {
        alert("删除成功");
        window.location.reload();
        tdObj.resetCache();
    }
}

/**
 * 删除已完成的任务
 * @param obj
 */
function removeDoneTask(obj) {
    var key = $(obj).data("key");
    var item = $(obj).data("item");
    var res = tdObj.removeTask(key, item);
    if (res) {
        alert("删除成功");
        window.location.reload();
        tdObj.resetCache();
    }
}

/**
 * 监听Add按钮的点击事件
 */
$("#add_todo").click(function () {
    // console.log($("input[name=task_name]").val());
    var task_name = $("input[name=task_name]").val();
    createTask(task_name);
});

/**
 * 监听内容输入框的enter按键
 */
$("#task_name").bind('keypress', function (event) {
    // enter 键
    if (event.keyCode == "13") {
        // alert('你输入的内容为：' + $('#task_name').val());
        var task_name = $('#task_name').val();
        createTask(task_name);
    }
});


/**
 * 添加任务
 * @param task_name
 * @returns {boolean}
 */
function createTask(task_name) {
    if (task_name) {
        if (tdObj.todos.contains(task_name)) {
            alert("当前任务已存在");
            return false;
        }
        var res = tdObj.set("todos", task_name);
        if (res) {
            alert("任务添加成功");
            window.location.reload();
        }
    } else {
        alert("添加的内容为空");
        return false;
    }
}