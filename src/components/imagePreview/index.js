import ImageIpreview from './src/index.vue';

ImageIpreview.install = function (app) {
  app.component(ImageIpreview.name, ImageIpreview);
};

export default ImageIpreview;
