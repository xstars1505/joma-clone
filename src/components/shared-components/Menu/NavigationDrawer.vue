<template>
  <v-layout>

    <v-toolbar-side-icon @click.stop="toggleDrawer" class="hidden-md-and-up toolbar-icon ml-3"></v-toolbar-side-icon>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!-- Main menu lv1 -->
      <v-list-group
        v-for="(mainMenu, index) in mainMenus" :key="index"
      >
        <v-list-tile
          slot="activator"
        >
          <v-list-tile-title
            class="menu-title body-1 font-weight-regular text-uppercase"
          >
            {{ mainMenu.title }}
          </v-list-tile-title>
        </v-list-tile>
        <!-- Sub menu lv2 -->
        <v-list-group
          no-action
          sub-group
          active-class="active-list-sub-menu"
          v-for="(menuBlock, index) in mainMenu.menuBlocks" :key="index"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title class="menu-title text-capitalize font-weight-regular">
              {{ menuBlock.title }}
            </v-list-tile-title>
          </v-list-tile>

          <!-- Sub menu items lv3 -->
          <div class="sub-menu-items-wrapper">
            <v-list-tile
              v-for="(item, i) in menuBlock.items"
              :key="i"
            >
              <a v-bind:href="item.link" v-text="item.name" class="menu-item-title font-weight-regular caption"></a>
            </v-list-tile>
            <v-list-tile>
              <a href="#" class="menu-item-title font-weight-medium caption">
                View all Brands (A-Z)
              </a>
            </v-list-tile>
          </div>
          <!-- Sub menu items lv3 -->
        </v-list-group>
        <!-- Sub menu lv2 -->
      </v-list-group>
      <!-- Main menu lv1 -->
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import menuData from '../../../data-example/main-menu.json';

export default {
  data: () => ({
    drawer: null,
    ...menuData,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style lang='scss' scoped>
.menu-title {
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: #444;
}

.menu-item-title {
  font-size: 13px !important;
  text-decoration: none;
  font-weight: normal;
  color: #444;
}

.sub-menu-items-wrapper {
  background-color: #f9f9f9;
}

.active-list-sub-menu {
  color: #444;
}

@media only screen and (max-width: 959px) {
  .toolbar-icon {
    .v-icon {
      font-size: 38px;
    }
  }
}
</style>
