<template>
  <div id="app">
    <div>
      <ul class="clearfix"></ul>
    </div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  created() {
    // this.getUserInfo();
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    ...mapActions(["getUserInfo"]),
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  watch: {
    userInfo(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  line-height: 30px;
}
h2 {
  cursor: pointer;
  color: #0269c8;
}
ul > li {
  width: 25%;
  float: left;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
