<template>
  <v-container>
    <v-layout align-center justify-center>
      <!--<v-flex sm1 class="hidden-xs-only">-->
        <v-btn flat icon color="red" @click="prevSlide">
          <v-icon>arrow_back_ios</v-icon>
        </v-btn>
      <!--</v-flex>-->

      <v-flex xs12>
        <carousel ref="carousel" :per-page="perPage" :perPageCustom="perPageCustom">
          <slot></slot>
        </carousel>
      </v-flex>

      <!--<v-flex sm1 class="hidden-xs-only">-->
        <v-btn flat icon color="pink" @click="nextSlide">
          <v-icon>arrow_forward_ios</v-icon>
        </v-btn>
      <!--</v-flex>-->
    </v-layout>
  </v-container>

</template>

<script>
import { Carousel } from 'vue-carousel';
import ItemCard from './ItemCard';

export default {
  name: 'SharedCarousel',
  props: {
    perPageCustom: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 3,
    },
  },
  components: {
    Carousel,
    'app-item-card': ItemCard,
  },
  data: () => ({}),
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
  },
};
</script>

<style scoped lang="scss">
</style>
