export default {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  // numParamsCouner(state, num) {
  //   state.counter += num;
  // },
  numParamsCouner(state, payload) {
    state.counter += payload.num
  },
  setModeView(state) {
    //通过这种形式追加元素是没有效果的，做不到响应式
    // state.info['addrsss'] = '洛杉矶'
    //在数组中可以通过数组的方法进行追加，在对象中需要用vue.set()方法进行追加
    // Vue.set(state.info, 'address', '洛杉矶')
    //删除的对象中某个属性用Vue.delete,也可以做到响应式数据
    // Vue.delete(state.info, 'age')
    state.info.name = 'Jsons';
  }
}