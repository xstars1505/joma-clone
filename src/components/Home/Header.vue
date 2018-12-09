<template>
  <div>
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
              <v-list-tile>
                <a href="#" class="dropdown-content-text" pa-0>Login</a>
              </v-list-tile>
              <v-divider />
              <v-list-tile>
                <a href="#" class="dropdown-content-text" pa-0>Register</a>
              </v-list-tile>
              <v-divider />
              <v-list-tile>
                <a href="#" class="dropdown-content-text" pa-0>Track my order</a>
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
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex align-center xs4>
          <div class="roating-item">UP TO 80% OFF DOORBUSTERS. SHOP</div>
        </v-flex>
        <v-flex xs4>
          <img
            src="https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/logo.png"
            max-width=267
            height=62
          />
        </v-flex>
        <v-flex d-flex align-center xs4>
          <div class="search-box">
            <input type="text" class="search-input"
              placeholder="Search by brand or model"
            >
            <v-icon class="search-icon pa-2">search</v-icon>
          </div>
        </v-flex>
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
  text-decoration: none;
  color: #24272a;
}

.roating-item {
  line-height: 15px;
  font-size: 12px;
  color: #D80D0D;
  text-transform: uppercase;
  font-weight: 500;
}

.search-box {
  display: flex;
  align-items: center;
  .search-input {
    &:focus {
      outline: none !important;
    }
    border: 1px solid #c7c7c7;
    height: 37px;
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }
  .search-icon {
    cursor: pointer;
    height: 37px;
    color: #fff;
    background-color: #414c5d;
  }
}
</style>

