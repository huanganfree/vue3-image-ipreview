<template>
  <div class="ha-image-preview">
    <img :src="url" @click.stop="handleShowPreview" :style="imgStyle"/>
    <transition name="slide-fade" appear>
      <div v-if="isShowImg" class="ha-image-preview_wrapper">
        <div class="ha-image-preview_mask"></div>
        <preview-image @close="handleClosePreview" @switch-image="handleSwitch" :currentImg="previewSrcList[imgeIndex]" />
      </div>
    </transition>
  </div>
</template>

<script>
import PreviewImage from './previewImage.vue';
export default {
  name: 'image-ipreview',
  // 避免传入多个prop
  provide() {
    return {
      childProp: this
    };
  },
  components: {
    PreviewImage
  },
  props: {
    url: {
      type: String,
      default: '',
      required: true
    },
    degree: {
      type: Number,
      default: 0
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    isShowToolBar: {
      type: Boolean,
      default: true
    },
    isMouseWheel: {
      type: Boolean,
      default: false
    },
    previewSrcList: {
      type: Array,
      default: () => [{}],
      required: true
    },
    isTransition: {
      type: Boolean,
      default: false // 是否开启过渡动画
    }
  },
  computed: {
    imgStyle() {
      return {
        transform: `rotate(${this.degree}deg)`
      };
    }
  },
  data() {
    return {
      isShowImg: false,
      imgeIndex: this.previewSrcList.findIndex(item => item.url === this.url)
    };
  },
  methods: {
    handleShowPreview() {
      this.isShowImg = true;
      const bodyDOM = document.getElementsByTagName('body')[0];
      bodyDOM.style.overflow = 'hidden';
    },
    handleClosePreview() {
      this.isShowImg = false;
      const bodyDOM = document.getElementsByTagName('body')[0];
      bodyDOM.style.overflow = 'visible';
    },
    handleSwitch(data) {
      this.imgeIndex = this.imgeIndex + data;
      if (this.imgeIndex < 0) {
        this.imgeIndex = this.previewSrcList.length - 1;
      }
      if (this.imgeIndex > this.previewSrcList.length - 1) {
        this.imgeIndex = 0;
      }
    }
  }
};
</script>

<style lang='less' scoped>

.ha-image-preview { 
  .slide-fade-enter-active      {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from{
    transform: translateX(-10px);
    opacity: 0;
  }
  .slide-fade-leave-to{
    transform: translateX(15px);
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .ha-image-preview_wrapper {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 2033;
    top: 0;
    left: 0;
    .ha-image-preview_mask {
      opacity: 0.5;
      background: #000;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }
}
</style>

