<!--
 * @Author: wxvirus
 * @Date: 2021-08-05 21:34:14
 * @LastEditTime: 2021-08-05 21:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/vue_base/vuedemo/src/views/Index.vue
-->

<template>
  <div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>

    <PropsAndData :name="name" :info="info" :list="list"></PropsAndData>
  </div>
</template>

<script>
import PropsAndData from "./PropsAndData.vue";
let name = "world";
export default {
  components: {
    PropsAndData,
  },
  data() {
    // 修改前
    // this.name = name;

    return {
      // 修改后
      name: "",
      //   info: {}, // 修改前
      info: {
        // 修改后
        number: undefined,
      },
      list: [],
    };
  },
  methods: {
    handleNameChange() {
      // name并没有做响应式
      this.name = "vue" + Date.now();
      console.log(
        "this.name 发生了变化，但是并没有触发子组件的更新",
        this.name
      );
    },
    handleInfoChange() {
      this.info.number = 1;
      console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log("this.list 发生了变化，但是触发了子组件更新", this.list);
    },
  },
};
</script>