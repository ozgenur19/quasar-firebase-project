<template>
  <div><TheHeader /></div>
  <div><Carousel1 /></div>
  <div style="height: 1200px"></div>
  <div><Carousel2 /></div>
  <div style="height: 500px"></div>
  <div><TheFooter /></div>
</template>

<script setup>
import TheHeader from 'components/TheComp1.vue';
import Carousel1 from 'components/TheComp9.vue';
import Carousel2 from 'components/TheComp10.vue';
import TheFooter from 'components/TheComp5.vue';
</script>
