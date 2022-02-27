export default {
  upTwoCounter(state) {
    return state.counter * state.counter
  },
  filterListData(state) {
    return state.list.filter(item => item.age > 20)
  },
  //还可以获取已有方法的一些属性，通过第二参数传入
  getListLength(state, getter) {
    return getter.filterListData.length
  },
  getParamsCode(state) {
    return function (age) {
      return state.list.filter(item => item.age > age)
    }
  }
}