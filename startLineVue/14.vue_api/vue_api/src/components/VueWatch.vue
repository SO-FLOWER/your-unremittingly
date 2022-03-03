<template>
  <div class="hello">
    <!-- //单观察数据为字符串或数组时 -->
    example0<input type="text" v-model="example0" /> {{ finallyExample }} <br />
    example1<input type="text" v-model="example1" /> <br />
    <!-- //当观察数据example1为对象时，如果键值发生变化，为了监听数据变化，需要添加deep:true参数 -->
    example2<input type="text" v-model="example2.inner0" />
  </div>
</template>

<script>
export default {
  name: "VueWatch",
  data() {
    return {
      example0: "",
      example1: "",
      finallyExample: "",
      example2: {
        inner0: 1,
        inner1: 2,
      },
    };
  },
  watch: {
    //需要监听的变量，需要与监听的方法名一直
    example0(cur, old) {
      console.log(cur, old);
      //刚开始绑定的时候不会执行，等到example0改变的时候才进行监听
      this.finallyExample = cur;
    },
    example1: "otherCreate",
    example2: {
      //当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      //watch的默认方法就是handler
      handler(cur, old) {
        console.log(cur, old);
      },
      deep: true,
    },
  },
  methods: {
    otherCreate(cur, old) {
      console.log(cur, old);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
