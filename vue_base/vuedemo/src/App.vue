<!--
 * @Author: your name
 * @Date: 2021-08-04 22:01:22
 * @LastEditTime: 2021-08-05 00:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/vue_base/vuedemo/src/App.vue
-->
<template>
  <div id="app">
    {{ message }}

    <!-- 简写形式 -->
    <input type="text" v-model="message" />

    <!-- 非简写形式 -->
    <input type="text" :value="message" @input="handleChange" />

    <todo-list>
      <todo-item
        @delete="handleDelete"
        v-for="item in list"
        :title="item.title"
        :del="item.del"
        :key="item.title"
      >
        <template v-slot:pre-icon="{ value }">
          <span>前置图标 {{ value }}</span>
        </template>
        <!-- <template v-slot:suf-icon>
                    <span>后置图标</span>
                </template> -->
        <!-- 老语法 -->
        <!-- <span slot="pre-icon">前置图标</span> -->
        <!-- <span slot="suf-icon">后置图标</span> -->
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoItem,
    TodoList,
  },
  data() {
    return {
      message: "hello world",
      list: [
        {
          title: "课程1",
          del: false,
        },
        {
          title: "课程2",
          del: true,
        },
      ],
    };
  },
  methods: {
    handleDelete(val) {
      console.log("handleDelete", val);
    },
    handleChange(e) {
      // 获取 input 事件的对象的 value 值
      this.message = e.target.value;
    },
  },
};
</script>

<style>
</style>
