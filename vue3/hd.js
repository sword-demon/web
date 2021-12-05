const app = Vue.createApp({
    // 根组件-父亲
    data() {
        return {
            lessions: window.lessions,
            name: '根组件',
            html: `<div style="color: red">无解 的game</div>`,
        }
    },
})

// 组件 - 孩子
app.component('wx', {
    data() {
        return { name: '无解的组件wx' }
    },
    template: `<h3 style="background-color:red;color=white;">{{name}}</h3>`,
})

// 返回根组件的实例
const vm = app.mount('#app')
// console.log(vm.name)

// 根组件的实例
console.log(vm.name)
console.log(vm.$data.name)

setTimeout(() => {
    vm.$data.name = '无解的额游戏'
}, 3000)
