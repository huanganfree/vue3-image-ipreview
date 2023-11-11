import ImagePrview from './src/index.vue';

// eslint-disable-next-line func-names
ImagePrview.install = function (app) {
  //将所有标签前缀为 `ion-` 的标签视为自定义元素
  app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.includes('image-ipreview')
  }
  app.component(ImagePrview.name, ImagePrview);
};

export default ImagePrview;
