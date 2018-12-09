<template>
  <div>

    <v-btn @click="load">test</v-btn>
    <section>
      <app-header></app-header>
    </section>
    <!--Carousel-->
    <section>
      <app-menu></app-menu>
      <app-carousel/>
    </section>

    <section>
      <v-container justify-space-between>
        <v-layout d-flex justify-center>
          <v-flex xs12 xl8>
            <app-feature-daily></app-feature-daily>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <app-trending/>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import Header from '../components/Home/Header';
import Menu from '../components/Home/Menu';
import Carousel from '../components/Home/Carousel';
import FeatureDaily from '../components/Home/FeatureDaily';
import Trending from '../components/Home/Trending';
import customAxios from '../axios/axios';

export default {
  components: {
    'app-header': Header,
    'app-menu': Menu,
    'app-carousel': Carousel,
    'app-feature-daily': FeatureDaily,
    'app-trending': Trending,
  },
  methods: {
    load: () => customAxios.get('https://jsonplaceholder.typicode.com/todos')
      .then(data => console.log(data)),
  },
  mounted() {
    // customAxios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(data => console.log(data));
  },
};

</script>
