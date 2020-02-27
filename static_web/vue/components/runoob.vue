<template id="tmpl">
    <div>自定义组件</div>
</template>

<script>


    //定义全局组件
    Vue.component('counter', {
        template: '#tmpl',
        data: function () {
            return {count: 0}
            //data 数据可以在 template 模板上引用
        },
        methods: {
            //组件中的方法
            increment() {
                this.count++
            }
        }
    })

</script>

<style lang="scss" scoped>
    .container {
        height: 40px;
        background: #cccccc;
        width: 100%;
    }


</style>