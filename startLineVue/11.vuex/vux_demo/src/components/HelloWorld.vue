<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <h4>{{$store.state.counter}}</h4>
    <button @click="addCounter">+</button>
    <button @click="inCounter">-</button>
    <button @click="addParamsCouner(5)">+{{addnums}}</button>
    <h4>getters的使用</h4>
    <div>更新state里面的数据:{{$store.getters.upTwoCounter}}</div>
    <div>年龄大于20岁的人:{{$store.getters.filterListData}}</div>
    <div>获取有多少大于20岁的人:{{$store.getters.getListLength}}</div>
    <div>通过你传入的参数进行获取相应的数据:{{$store.getters.getParamsCode(20)}}</div>
    <h4>state数据当中有一些数据不是响应式的，追加和删除相应的数据</h4>
    <div>{{$store.state.info}}</div>
    <button @click="addStateInfo">增加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      addnums:5
    }
  },
  methods:{
    addCounter(){
      this.$store.commit('increment')
    },
    inCounter(){
      this.$store.commit('decrement')
    },
    addParamsCouner(num){
      this.addnums = num;
      // this.$store.commit('numParamsCouner',num);
      //这种形式会提交一个对象
      this.$store.commit({
        type:'numParamsCouner',
        num
      })
    },
    addStateInfo(){
      //进行同步更改相关信息
      // this.$store.commit('setModeView');
      //进行异步更改相关信息
      this.$store.dispatch('asyncSetting').then(res => console.log(res));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
