<template>
  <v-container justify-space-between>
    <v-layout d-flex justify-center>
      <v-flex md12 lg10 xl8>
        <v-layout align-center column>
          <v-flex xs12 my-5>
            <h1 class="trending-now">Trending Now</h1>
          </v-flex>

          <v-flex xs12>
            <app-trending-carousel :scrollPerPage="true" :perPageCustom="[[320,2], [480, 2], [768, 3], [1024, 4]]">
              <slide v-for="n in 6" :key="n">
                <app-item-card></app-item-card>
              </slide>
            </app-trending-carousel>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
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

<style lang='scss' scoped>
.trending-now {
  font-family: "proxima-nova",sans-serif;
  display: block;
  font-size: 28px;
  color: #444;
  text-align: center;
  line-height: 22px;
  font-style: normal;

  &:after {
    content: '';
    display: block;
    width: 100px;
    clear: both;
    margin: 20px auto 0 auto;
    border-bottom: solid 2px #444;
    left: 0;
    border-top: none;
    top: 0;
  }
}
</style>
