<template>
  <div class="hello">
    <!-- //单观察数据为字符串或数组时 -->
    example0<input type="text" v-model="example0" /> <br />
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
      example2: {
        inner0: 1,
        inner1: 2,
      },
    };
  },
  watch: {
    example0(cur, old) {
      console.log(cur, old);
    },
    example1: "otherCreate",
    example2: {
      //当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
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
