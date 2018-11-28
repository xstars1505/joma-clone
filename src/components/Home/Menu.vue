<template>
  <v-container
    class="text-md-center nav-menu pa-2"
    row>

    <app-nav-drawer v-bind:mainMenus="mainMenus"></app-nav-drawer>
    <v-menu
      offset-y
      open-on-hover
      v-for="mainMenu in mainMenus"
      :key="mainMenu.id"
      class="menu-item hidden-sm-and-down"
      content-class="menu-item-content"
      >
        <div
          slot="activator"
          class="title-wrapper pa-3">
          <div class="title-text">
            {{ mainMenu.title }}
          </div>
        </div>

         <v-container py-0>
          <v-layout row wrap>
            <app-menu-generic
              v-for="(menuBlockData, index) in mainMenu.menuBlocks"
              :key="index"
              v-bind:data="menuBlockData"
              v-bind:index="index"/>
            <!-- <app-menu-generic-group /> -->
          </v-layout>
        </v-container>
    </v-menu>
  </v-container>
</template>
<script>

import MenuGeneric from '../shared-components/Menu/MenuGeneric';
import MenuGenericGroup from '../shared-components/Menu/MenuGenericGroup';
import NavigationDrawer from '../shared-components/Menu/NavigationDrawer';
import menuData from '../data-example/main-menu.json';

export default {
  data: () => ({
    ...menuData,
  }),
  components: {
    'app-menu-generic': MenuGeneric,
    'app-menu-generic-group': MenuGenericGroup,
    'app-nav-drawer': NavigationDrawer,
  },
};
</script>

<style scoped lang='scss'>
.menu-item {
  .title-wrapper {
    .title-text {
      border-bottom: 2px solid #fafafa;
      &:hover {
        border-bottom: 2px solid #353535;
      }
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      line-height: 28px;
      color: #353535;
      text-transform: uppercase;
    }
  }
}

.menu-item-content {
  max-width: 100%;
  width: 100%;
  left: 0px !important;
  background-color: #f3f4f6;
  min-height: 350px;
  padding: 10px 30px;
}

.navigation-drawer--mini-variant {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
