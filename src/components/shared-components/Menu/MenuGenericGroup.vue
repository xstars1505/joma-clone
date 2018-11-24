<template>
  <v-content class="d-inline-block">
    <div class="content-wrapper d-inline-grid">
      <menu-generic
        v-for="genericMenu in menuGenericGroup"
        :key="genericMenu.id"
        v-bind:data="genericMenu" />
    </div>
  </v-content>
</template>
<script>
import MenuGeneric from './MenuGeneric';

export default {
  data: () => ({
    menuGenericGroup: [
      {
        id: 1,
        title: 'handbags',
        items: [
          {
            name: 'Briefcases',
            link: '#',
          },
          {
            name: 'Clutches',
            link: '#',
          },
        ],
      },
      {
        id: 2,
        title: 'handbags',
        items: [
          {
            name: 'Briefcases',
            link: '#',
          },
          {
            name: 'Clutches',
            link: '#',
          },
        ],
      },
    ],
  }),
  components: {
    'menu-generic': MenuGeneric,
  },
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  display: inline-grid;
}
</style>
