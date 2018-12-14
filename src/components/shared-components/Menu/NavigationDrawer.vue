<template>
  <v-layout>

    <v-toolbar-side-icon @click.stop="toggleDrawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!-- Main menu lv1 -->
      <v-list>
        <v-list-group
          no-action
          v-for="mainMenu in mainMenus" :key="mainMenu.id"
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
          <v-list>
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
          </v-list>
          <!-- Sub menu lv2 -->
        </v-list-group>
      </v-list>
      <!-- Main menu lv1 -->
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import VList from 'vuetify/lib/components/VList/VList';

export default {
  components: { VList },
  props: ['mainMenus'],
  data: () => ({
    drawer: null,
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
</style>
