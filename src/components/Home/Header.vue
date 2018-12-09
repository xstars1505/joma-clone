<template>
  <div class="top-links-section">
    <v-container d-flex justify-space-between pa-0 fill-height>
      <v-layout align-center>
        <div class="d-flex align-center px-4 text-uppercase font-italic fill-height content-hover">
          <v-icon class="icon mr-1">forum</v-icon>
          <div>Live chat</div>
        </div>
        <div class="d-inline-block">CALL US (877) 834-1434 | (212) 924-9925</div>
      </v-layout>
      <v-layout align-center justify-end>
        <v-menu offset-y open-on-hover class="fill-height" full-width content-class="dropdown-content" nudge-left=2>
          <div slot="activator" class="content-hover dropdown-menu">
            <div>My account</div>
          </div>
          <v-list>
            <v-list-tile @click="click">
              <v-list-tile-title class="dropdown-content-text">Login</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="click">
              <v-list-tile-title class="dropdown-content-text">Register</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="click">
              <v-list-tile-title class="dropdown-content-text">Track my order</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu
          offset-y open-on-hover
          class="fill-height" full-width
          left
          content-class="dropdown-content"
          nudge-right=3
          min-width=300>
            <div slot="activator" class="content-hover dropdown-menu">
              <div>My shopping bag (1)</div>
              <v-icon class="icon ml-2">shopping_cart</v-icon>
            </div>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="caption text-xs-center">There are no items in your bag.</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {

};
</script>

<style lang="scss" scoped>
.top-links-section {
  background-color: #24272a;
  color: #f5f5f5;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  height: 38px;
}

.dropdown-menu {
  display: flex;
  height: 38px;
  align-items: center;
  padding: 0px 12px;
}

.content-hover {
  cursor: pointer;
  &:hover {
    color: #24272a;
    background-color: #fff;
    .icon {
      color: #24272a;
    }
  }

  .icon {
    color: #f5f5f5;
  }
}

.v-menu__activator--active {
  .dropdown-menu {
    color: #24272a;
    background-color: #fff;
    .icon {
      color: #24272a;
    }
  }
}

.dropdown-content {
  border: 2px solid #24272a;
  border-top: none;
  border-top-width: 0px;
  border-radius: 0px;
}

.dropdown-content-text {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
}
</style>

