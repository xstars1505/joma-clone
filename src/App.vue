<template>
  <v-app light>
    <!--Header-->
    <app-header/>

    <v-content>
      <div class="text-xs-center"  v-if="isLoading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <router-view></router-view>

    </v-content>

    <!--Footer-->
    <app-footer/>
  </v-app>
</template>

<script>
import Header from './components/shared-components/Header';
import Footer from './components/shared-components/Footer';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
  data: () => ({

  }),
  computed: {
    isLoading() { return this.$store.state.isLoading; },
  },
};
</script>
