class TodoList {

    todos = [];
    done = [];

    todo_key = "todos";
    done_key = "done";

    constructor() {
        this.onLoad();
    }

    getTodosLength() {
        return this.todos.length;
    }

    getDoneLength() {
        return this.done.length;
    }

    onLoad() {
        this.todos = this.get(this.todo_key);
        this.done = this.get(this.done_key);
    }

    set(item_key, item) {
        if (item_key == "") {
            return false;
        }
        if (item_key === "todos") {
            this.setTodos(item);
            return true;
        }
        if (item_key === "done") {
            this.setDone(item);
            return true;
        }
    }

    setTodos(item) {
        this.todos.push(item);
        localStorage.setItem(this.todo_key, JSON.stringify(this.todos));
    }

    setDone(item) {
        this.done.push(item);
        localStorage.setItem(this.done_key, JSON.stringify(this.done));
    }

    getIndexOfItems(item_key, item) {
        if (item_key === "todos") {
            return this.todos.indexOf(item) > -1 ? this.todos.indexOf(item) : 0;
        } else if (item_key === "done") {
            return this.done.indexOf(item) > -1 ? this.done.indexOf(item) : 0;
        } else {
            return 0;
        }
    }

    complete(item) {
        var completeIndex = this.getIndexOfItems(this.todo_key, item);
        this.remove(this.todo_key, completeIndex);
        this.setDone(item);
        return true;
    }

    removeTask(item_key, item) {
        var deleteIndex = this.getIndexOfItems(item_key, item);
        return this.remove(item_key, deleteIndex);
    }


    remove(item_key, index) {
        // 根据传入的是todos还是done进行从数据库里剔除item
        if (item_key === "todos") {
            this.todos.splice(index, 1);
            return true;
        } else if (item_key === "done") {
            this.done.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    get(item_key) {
        return JSON.parse(localStorage.getItem(item_key)) || [];
    }

    resetCache() {
        // 重新更新todos和done的数组值到本地缓存
        localStorage.setItem(this.todo_key, JSON.stringify(this.todos))
        localStorage.setItem(this.done_key, JSON.stringify(this.done));
    }
}