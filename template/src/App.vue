<template>
    <div id="app">
        <h3>{{age}}</h3>
        <button @click="changeAge">change age</button>
    </div>
</template>

<style lang="less" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';
    import One from './store/One';

    @Component
    export default class App extends Vue {
        one = One;
        
        get age() {
            return this.one.age;
        }
        changeAge() {
            One.changeAge();
        }
        @Watch('age')
        watchAge(value: number) {
            console.log(value);
        }

    }
</script>

