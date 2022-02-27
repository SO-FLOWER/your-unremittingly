import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import ModuleA from './module/moduleA'

//使用插件vuex
Vue.use(Vuex);

const state = {
  counter: 1000,
  list: [
    { name: 'Jsons', age: 24, id: 1 },
    { name: 'why', age: 10, id: 2 },
    { name: 'code', age: 44, id: 3 },
    { name: 'chen', age: 32, id: 4 }
  ],
  info: { name: 'kebi', age: 42, height: '1.98' }
}

//将store放入vue的原型对象上，通过$store.state进行取值
const store = new Vuex.Store({
  state,
  //一般处理一些同步的事件方法,更新vuex state中状态的唯一方式，通过mutations
  mutations,
  //处理异步操作进行dispathch将属性或者方法派发到commit里面，进入到mutations
  actions,
  //跟computed的方法是类似的，当state的数据需要改变之后再进行返回时，可以使用getters
  getters,
  modules: {
    //根据模块进行划分，里面也有自身的属性和相应的状态
    a: ModuleA
  }
})



export default store;