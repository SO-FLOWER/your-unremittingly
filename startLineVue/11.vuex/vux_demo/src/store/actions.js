export default {
  //context联系上下文 
  asyncSetting(context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit('setModeView')
        resolve('after 5s success!!')
      }, 5000);
    })
  }
}