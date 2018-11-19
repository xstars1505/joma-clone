<template>
  <app-trending-carousel :scrollPerPage="true" :perPageCustom="[[320,2], [480, 2], [768, 3], [1024, 4]]">
    <slide v-for="n in 6" :key="n">
      <app-item-card></app-item-card>
    </slide>
  </app-trending-carousel>
</template>

<script>
import { Slide } from 'vue-carousel';
import Carousel from '../shared-components/Carousel';
import ItemCard from '../shared-components/ItemCard';

export default {
  name: 'Trending',
  components: {
    'app-trending-carousel': Carousel,
    'app-item-card': ItemCard,
    Slide,
  },
};
</script>

<style scoped>

</style>
