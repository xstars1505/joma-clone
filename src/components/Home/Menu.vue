<template>
  <v-container
    class="text-md-center nav-menu pa-2"
    row>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
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
            <app-menu-generic-group />
          </v-layout>
        </v-container>
    </v-menu>
  </v-container>
</template>
<script>

import MenuGeneric from '../shared-components/Menu/MenuGeneric';
import MenuGenericGroup from '../shared-components/Menu/MenuGenericGroup';

export default {
  data: () => ({
    mainMenus: [
      {
        id: 1,
        title: 'handbags',
        menuBlocks: [
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
              {
                name: 'Cosmetic',
                link: '#',
              },
              {
                name: 'Crossbody',
                link: '#',
              },
              {
                name: 'Briefcases',
                link: '#',
              },
              {
                name: 'Clutches',
                link: '#',
              },
              {
                name: 'Cosmetic',
                link: '#',
              },
              {
                name: 'Crossbody',
                link: '#',
              },
              {
                name: 'Briefcases',
                link: '#',
              },
            ],
          },
          {
            id: 2,
            title: 'Watches by Style',
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
            id: 3,
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
      },
      {
        id: 2,
        title: 'watches',
        menuBlocks: [],
      },
      {
        id: 3,
        title: 'men\'s',
        menuBlocks: [],
      },
      {
        id: 4,
        title: 'ladies',
        menuBlocks: [],
      },
      {
        id: 5,
        title: 'sunglasses',
        menuBlocks: [],
      },
      {
        id: 6,
        title: 'jewelry',
        menuBlocks: [],
      },
    ],
  }),
  components: {
    'app-menu-generic': MenuGeneric,
    'app-menu-generic-group': MenuGenericGroup,
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
</style>
