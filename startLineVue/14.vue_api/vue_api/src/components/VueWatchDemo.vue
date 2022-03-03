<template>
  <div>
    <p>FullName:{{ fullName }}</p>
    <p>FirstName: <input type="text" v-model="fristName" /></p>
  </div>
</template>

<script>
export default {
  name: "VueWatchDemo",
  data() {
    return {
      fristName: "Jsons",
      lastName: "chen",
      fullName: "",
    };
  },
  watch: {
    fristName: {
      handler(cur) {
        this.fullName = cur + " " + this.lastName;
      },
      //immediate:true代表如果在 wacth 里声明了 firstName 之后，会立即先执行里面的handler方法
      immediate: true,
    },
  },
};
</script>
