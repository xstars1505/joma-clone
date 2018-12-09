<template>
  <div class="text-md-center nav-menu pa-2" row>
    <app-nav-drawer :mainMenus="mainMenus"></app-nav-drawer>
    <v-menu
      offset-y
      open-on-hover
      v-for="mainMenu in mainMenus"
      :key="mainMenu.id"
      class="menu-item hidden-sm-and-down row"
      content-class="menu-item-content"
      close-delay='150'
      >
        <div
          slot="activator"
          class="title-wrapper pa-3">
          <div class="title-text">
            {{ mainMenu.title }}
          </div>
        </div>

        <v-container py-0>
          <div class="menu-generic-layout">
            <app-menu-generic
              v-for="(menuBlockData, index) in mainMenu.menuBlocks"
              :key="index"
              :menuBlockData="menuBlockData"
              :index="index"/>
          </div>
        </v-container>
      </v-menu>
  </div>
</template>
<script>

import MenuGeneric from '../shared-components/Menu/MenuGeneric';
import NavigationDrawer from '../shared-components/Menu/NavigationDrawer';
import menuData from '../../data-example/main-menu.json';

export default {
  data: () => ({
    ...menuData,
  }),
  components: {
    'app-menu-generic': MenuGeneric,
    'app-nav-drawer': NavigationDrawer,
  },
};
</script>

<style scoped lang='scss'>
.menu-item {
  .title-wrapper {
    .title-text {
      border-bottom: 2px solid #fff;
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      line-height: 28px;
      color: #353535;
      text-transform: uppercase;
    }
  }
}

.menu-generic-layout {
  display: flex;
  flex-flow:column wrap;
  height: 350px;
}

.menu-item-content {
  max-width: 100%;
  width: 100%;
  left: 0px !important;
  background-color: #f3f4f6;
  padding: 10px 30px;
  height: 400px;
}

.navigation-drawer--mini-variant {
  overflow-x: hidden;
  overflow-y: auto;
}
.v-menu__activator--active {
  .title-wrapper {
    .title-text {
      border-bottom: 2px solid #353535;
    }
  }
}
</style>
