<template>
  <div class="hello">
    <h1>这是总览页面</h1>
    <Button>测试</Button>
    <div id="container"></div>
  </div>
</template>

<script>
import { Line } from "@antv/g2plot";
export default {
  name: "HelloWorld",
  data() {
    return {
      line: null,
      demoData: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
    };
  },
  created() {},
  mounted() {
    this.line = new Line("container", {
      data: this.demoData,
      xField: "year",
      yField: "value",
    });
    this.line.render();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1 {
  text-align: center;
  line-height: 50px;
  font-size: 26px;
}
</style>
