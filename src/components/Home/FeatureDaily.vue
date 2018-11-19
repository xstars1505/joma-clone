<template>
  <v-layout
    row
    wrap
    class="my-5"
    align-center
  >
    <v-flex md3 class="hidden-sm-and-down">
      <app-item-card/>
    </v-flex>

    <v-flex xs12 md9 pl-3>
      <v-layout>
        <v-flex xs4>
          <app-item-card/>
        </v-flex>

        <v-flex xs4>
          <app-item-card/>
        </v-flex>

        <v-flex xs4>
          <app-item-card/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

</template>

<script>
import ItemCard from '../shared-components/ItemCard';

export default {
  name: 'FeatureDaily',
  components: {
    'app-item-card': ItemCard,
  },
};
</script>

<style scoped>

</style>
