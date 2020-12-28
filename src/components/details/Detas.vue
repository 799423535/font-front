<template>
  <div class="vue-water-easy" ref="waterWrap">
    <div v-for="(items, clos) in list" :key="clos" :style="waterStyle" class="colsW">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :style="{ marginBottom: gap + 'px' }"
        >
          <slot :item="item" :index="index" :clos="clos"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    maxCols: {
      type: Number,
      default: 2,
      validator(value) {
        return value > 1;
      },
    },
    srcKey: {
      type: String,
      default: "src",
    },
    gap: {
      type: Number,
      default: 10,
      validator(value) {
        return value > 0;
      },
    },
    imgsArr: {
      type: Array,
      required: true,
    },
  },
  computed: {
    waterStyle() {
      if (this.gap <= 0) {
        this.gap = 10;
      }
      return {
        margin: `0 ${this.gap / 2}px`,
      };
    },
  },
  watch: {
    imgsArr(val) {
      this.$nextTick(() => {
        this.list = this.initData();
        this.start(0);
      });
    },
  },
  data() {
    let list = this.initData();
    let img = "/@/assets/logo.png";
    return {
      list: list,
    };
  },
  mounted() {
    this.start(0);
  },
  methods: {
    initData() {
      let list = new Array(this.maxCols);
      for (let i = 0; i < this.maxCols; i++) {
        list[i] = [];
      }
      return list;
    },
    start(i) {
      const me = this;
      let imgsArr = me.imgsArr;
      if (i >= imgsArr.length && this.$refs.waterWrap) {
        return;
      }
      me.loadImg(imgsArr[i], i)
        .catch(() => {})
        .finally(() => {
          me.start(++i);
        });
      // for(let i = 0; i < imgsArr.length; i++ ){
      //     let item = imgsArr[i];
      //     me.loadImg(item,i);
      // }
    },
    loadImg(item) {
      const me = this;
      let srcKey = me.srcKey;
      return new Promise(function (resolve, reject) {
        if (item && item[srcKey]) {
          let src = item[srcKey];
          let img = new Image();
          img.src = src;
          img.crossOrigin = "anonymous";
          img.onload = function () {
            var index = me.getMinHeight();
            me.list[index].push(item);
            me.$nextTick(() => {
              resolve(img);
            });
          };
          img.onerror = function (e) {
            reject(e);
          };
        } else {
          reject("数据错误");
        }
      });
    },
    getMinHeight() {
      let index = 0;
      try {
        if (!this.$refs.waterWrap) {
          return index;
        }
        let childs = this.$refs.waterWrap.children || [];
        let minx = childs[0].children[0].offsetHeight;
        for (let i = 1; i < childs.length; i++) {
          let element = childs[i];
          let h = element.children[0].offsetHeight;
          if (h < minx) {
            minx = h;
            index = i;
          }
        }
      } catch (e) {
        console.warn(e);
        return index;
      }

      return index;
    },
  },
};
</script>
<style lang="less" scoped>
.vue-water-easy {
  width: 100%;
  display: flex;
  justify-content: space-between;
  div.colsW {
    flex: 1;
    box-sizing: border-box;
    position: relative;
    &:last-child {
      margin-right: 0 !important;
    }
    &:first-child {
      margin-left: 0 !important;
    }
    ul {
      list-style: none;
      width: 100%;
      li {
        width: 100%;
      }
    }
  }
}
</style>
