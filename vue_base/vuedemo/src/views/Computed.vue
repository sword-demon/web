<!--
 * @Author: wxvirus
 * @Date: 2021-08-05 23:19:30
 * @LastEditTime: 2021-08-05 23:25:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/vue_base/vuedemo/src/views/Computed.vue
-->

<template>
  <div>
    <p>Reversed message1: "{{ reversedMessage1 }}"</p>
    <p>Reversed message2: "{{ reversedMessage2 }}"</p>
    <p>{{ now }}</p>
    <!-- 强制刷新模板 -->
    <button @click="() => $forceUpdate()">forceUpdate</button>
    <br />
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello world",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage1: function () {
      console.log("执行reversedMessage1");
      return this.message.split("").reverse().join("");
    },
    now: function () {
      return Date.now();
    },
  },
  methods: {
    reversedMessage2: function () {
      console.log("执行reversedMessage2");
      return this.message.split("").reverse().join("");
    },
  },
};
</script>