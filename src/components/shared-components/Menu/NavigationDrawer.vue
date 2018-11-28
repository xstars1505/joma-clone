<template>
  <v-layout>

    <v-toolbar-side-icon @click.stop="toggleDrawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-group
        v-for="(mainMenu, index) in mainMenus" :key="index"
      >
        <!-- Main menu -->
        <v-list-tile
          slot="activator"
        >
          <v-list-tile-title
            class="menu-title body-1 font-weight-regular text-uppercase"
          >
            {{ mainMenu.title }}
          </v-list-tile-title>
        </v-list-tile>
        <v-list-group
          no-action
          sub-group
          active-class="active-list-sub-menu"
          v-for="(menuBlock, index) in mainMenu.menuBlocks" :key="index"
        >
          <!-- Sub menu -->
          <v-list-tile slot="activator">
            <v-list-tile-title class="menu-title text-capitalize font-weight-regular">
              {{ menuBlock.title }}
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(item, i) in menuBlock.items"
            :key="i"
            class="sub-menu-items-wrapper"
          >
            <!-- Sub menu items -->
            <a href="google.com" v-text="item.name" class="menu-item-title font-weight-regular caption"></a>
            <!-- Sub menu items -->
          </v-list-tile>
           <!-- Sub menu -->
        </v-list-group>
        <!-- Main menu -->
      </v-list-group>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  props: ['mainMenus'],
  data: () => ({
    drawer: null,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;

      // fix drawer does not scroll in overflow case
      if (this.drawer) {
        document.scrollingElement.style.overflow = 'scroll';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-title {
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: #444;
}

.menu-item-title {
  font-size: 13px;
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
</style>
