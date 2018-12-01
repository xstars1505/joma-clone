<template>
  <div class="items-layout" v-bind:class="{ 'double-layout': isDouble }">
    <div
      v-for="item in items"
      :key="item.id"
    >
      <a :href="item.link" class="item-name-text d-inline-block body-1 font-weight-regular">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'isDouble'],
};
</script>

<style lang="scss" scoped>
.double-layout {
  display: flex;
  flex-flow: column wrap;
  height: 290px;
}

.item-name-text {
  text-decoration:none;
  color: inherit;
  border-bottom: 2px solid #f3f4f6;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #353535;
  }
}
</style>
