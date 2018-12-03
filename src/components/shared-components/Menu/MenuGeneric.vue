<template>
  <v-content
    class="my-3 single-layout"
    v-bind:class="{ 'double-layout': menuBlockData.isDouble }"
  >
    <div
      class="title font-weight-medium mb-2 text-capitalize body-2"
    >
      {{ menuBlockData.title }}
    </div>
    <v-container fluid grid-list-sm pa-0 mt-1>
      <menu-generic-column v-bind:items="menuBlockData.items" v-bind:isDouble="menuBlockData.isDouble" />
    </v-container>
    <div
      class="title font-weight-medium my-1 text-capitalize body-2 d-inline-block link"
      v-if="isShowViewAllLink"
    >
      View all Brands (A-Z)
    </div>
  </v-content>
</template>
<script>
import MenuGenericColumn from './MenuGenericColumn';

export default {
  name: 'MenuBlock',
  props: ['menuBlockData'],
  computed: {
    isShowViewAllLink() {
      return this.menuBlockData.viewAllLink && this.menuBlockData.viewAllLink !== '';
    },
  },
  components: {
    'menu-generic-column': MenuGenericColumn,
  },
};
</script>
<style lang='scss' scoped>
.single-layout {
  display: block;
  width: 140px;
}

.double-layout {
  width: 280px !important;
}

.highlight-content {
  background-color: rebeccapurple;
}

.link {
  border-bottom: 2px solid #f3f4f6;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #353535;
  }
}
</style>
