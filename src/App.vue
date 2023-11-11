<template>
  <div>
    <ImagePreview :url="url" :isMouseWheel="true" :isShowToolBar="true" :closeOnPressEscape="true" style="width: 300px;"
      :previewSrcList="srcList" />
  </div>
</template>

<script>
import ImagePreview from './components/imagePreview/src/index.vue'
export default {
  name: 'App',
  components: {
    ImagePreview
  },
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      srcList: [
        {
          url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          degree: 30
        },
        {
          url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          // degree: 90
        },
        {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          degree: 180
        }
      ]
    };
  },
}
</script>
