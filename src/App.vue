<template>
  <v-app>
    <!--Header-->
    <app-header/>
    <app-menu/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!--Footer-->
    <app-footer/>
  </v-app>
</template>

<script>
import Header from './components/Home/Header';
import Menu from './components/shared-components/Menu/Menu';
import Footer from './components/shared-components/Footer';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-menu': Menu,
    'app-footer': Footer,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
  @import "assets/styles/main";
</style>
