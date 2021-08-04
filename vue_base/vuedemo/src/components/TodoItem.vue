<!--
 * @Author: wxvirus
 * @Date: 2021-08-04 22:05:07
 * @LastEditTime: 2021-08-04 22:14:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/vue_base/vuedemo/src/components/TodoItem.vue
-->

<template>
  <li>
    <slot name="pre-icon" :value="value"></slot>
    <span class="red" v-if="!del">{{ title }}</span>
    <span v-else style="text-decoration: line-through">{{ title }}</span>
    <slot name="suf-icon">😄</slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    del: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      value: Math.random(),
    };
  },
  methods: {
    handleClick() {
      console.log("点击了删除按钮");
      // 手动抛出事件 事件名，参数
      this.$emit("delete", this.title);
    },
  },
};
</script>

// scoped会生成一个哈希值
<style scoped>
.red {
  color: red;
}
</style>