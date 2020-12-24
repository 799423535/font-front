<template>
  <div class="index">
    <router-view></router-view>
    
    <van-tabbar :route="true" :fixed="true" :placeholder="true">
      <van-tabbar-item
        v-for="(item, i) in arr"
        :key="i"
        :icon="item.icon"
        :to="item.to"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const arr = reactive([
      { icon: "home-o", to: "/index/home", title: "首页" },
      { icon: "search", to: "/index/exhibition", title: "看展" },
      { icon: "friends-o", to: "", title: "图标" },
      { icon: "setting-o", to: "/index/course", title: "课程" },
      { icon: "setting-o", to: "/index/mine", title: "我的" },
    ]);
    return { arr };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
});
</script>
<style lang='less' scoped></style>
