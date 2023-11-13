<template>
<!-- 注意点击事件禁止冒泡 -->
  <ul @click.stop>
    <li class="iconfont zoom-out" @click="$emit('zoom', -0.3)" title="缩小">&#xec13;</li>
    <li class="iconfont zoom-in" @click="$emit('zoom', 0.3)" title="放大">&#xec14;</li>
    <li class="iconfont scale-to-onePercent" @click="$emit('scale-to-onePercent')" title="1:1缩放">&#xe912;</li>
    <li class="iconfont original-size" @click="$emit('original-size')" title="还原">&#xe7cf;</li>
    <li class="iconfont rotate-left" @click="$emit('spin', -90)" >&#xe69a;</li>
    <li class="iconfont rotate-right" @click="$emit('spin', 90)" >&#xe69b;</li>
  </ul>
</template>

<script setup lang="ts">

defineEmits(['zoom', 'scale-to-onePercent', 'original-size', 'spin'])

</script>
<style lang='less' scoped>
@import '../../../style/icon.css';

ul,li{
    list-style: none;
    margin: 0;
}

ul{
    padding-left: 12px;
    display: flex;
    background-color: rgba(96, 98, 102, .66);
    color: #ddd;
    padding: 10px 30px;
    border-radius: 20px;
}

li{
    font-size: 23px;
    margin:0 10px;
    cursor: pointer;
}

</style>
