<template>
  <v-content class="mx-4 my-3 d-inline-flex">
    <div class="title font-weight-medium mb-2 text-capitalize body-2">{{ data.title }}</div>
    <v-container fluid grid-list-sm pa-0>
      <v-layout column wrap fill-height>
        <v-flex
          v-for="item in data.items"
          :key="item.id"
        >
          <a :href="item.link" class="item-name-text d-inline-block body-1 font-weight-regular">{{ item.name }}</a>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'MenuBlock',
  props: ['data'],
  data: () => ({
    numOfColumn: 1,
  }),
};
</script>
<style lang="scss" scoped>
.v-content {
  display: inline-block;
  width: 120px;
}

.item-name-text {
  text-decoration:none;
  color: inherit;
  border-bottom: 2px solid #f3f4f6;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #353535;
  }
}

// .item-wrapper {
//   flex-flow: column wrap;
//   max-height: 300px;
//   display: flex;
// }
</style>
