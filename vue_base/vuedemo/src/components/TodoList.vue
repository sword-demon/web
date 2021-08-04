<!--
 * @Author: wxvirus
 * @Date: 2021-08-04 22:07:39
 * @LastEditTime: 2021-08-04 22:08:56
 * @LastEditors: Please set LastEditors
 * @Description: TodoList component
 * @FilePath: /web/vue_base/vuedemo/src/components/TodoList.vue
-->

<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 获取到事件传递出来的值
    handleDelete(val) {
      console.log("handleDelete", val);
    },
  },
};
</script>