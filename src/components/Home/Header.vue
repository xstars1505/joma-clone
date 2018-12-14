<template>
  <div class="header-wrapper">
    <div class="top-links-section">
      <v-container d-flex justify-space-between pa-0 fill-height>
        <v-layout align-center class="hidden-sm-and-down">
          <div class="d-flex align-center px-4 text-uppercase font-italic fill-height content-hover">
            <v-icon class="icon mr-1">forum</v-icon>
            <div>Live chat</div>
          </div>
          <div class="d-inline-block pl-3">CALL US (877) 834-1434 | (212) 924-9925</div>
        </v-layout>
        <v-layout align-center justify-end class="right-menu">
          <v-menu
            offset-y
            open-on-hover
            full-width
            content-class="dropdown-content"
            nudge-left=2
            class="hidden-sm-and-down"
          >
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
            full-width
            left
            content-class="dropdown-content"
            nudge-right=3
            min-width=300
            class="shopping-bag"
          >
              <div slot="activator" class="content-hover dropdown-menu">
                <div class="hidden-sm-and-down">My shopping bag (1)</div>
                <v-icon class="icon shopping-cart-icon ml-2">shopping_cart</v-icon>
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

    <v-container grid-list-md class="shop-title-container">
      <v-layout row wrap>
        <v-flex d-flex align-center xs3 md4>
          <div class="drawer-wrapper">
            <app-nav-drawer :mainMenus="mainMenus"></app-nav-drawer>
          </div>
          <div class="rotaing-banner">
            <div class="roating-item hidden-sm-and-down text-uppercase">UP TO 80% OFF DOORBUSTERS</div>
            <div class="roating-item hidden-sm-and-down text-uppercase">Warranty included on all watches.</div>
            <div class="roating-item hidden-sm-and-down text-uppercase">Extended holiday returns through Jan 15</div>
          </div>
        </v-flex>
        <v-flex xs6 md4>
          <v-img
            src="https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/logo.png"
            aspect-ratio="2"
            max-height=62
            contain
            class="hidden-xs-only"
          ></v-img>
          <v-img
            src="https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/mob-logo.png"
            aspect-ratio="2"
            height=20
            contain
            class="hidden-sm-and-up mob-logo"
          ></v-img>
        </v-flex>
        <v-flex d-flex align-center sm12 xs12 md4>
          <div class="search-box pl-1">
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
import NavigationDrawer from '../shared-components/Menu/NavigationDrawer';

export default {
  components: {
    'app-nav-drawer': NavigationDrawer,
  },
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

.shop-title-container {
  padding: 24px 0px;
  .drawer-wrapper {
    display: none;
  }
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

.rotaing-banner {
  position:relative;
  height: 15px;
  overflow: hidden;
  .roating-item {
    position: absolute;
    line-height: 15px;
    font-size: 12px;
    color: #D80D0D;
    text-transform: uppercase;
    font-weight: 500;
    &:nth-child(1) {
      animation:slide-banner 30s infinite;animation-delay:0s;animation-fill-mode:both;
    }
    &:nth-child(2) {
      animation:slide-banner 30s infinite;animation-delay:10s;animation-fill-mode:both;
    }
    &:nth-child(3) {
      animation:slide-banner 30s infinite;animation-delay:20s;animation-fill-mode:both;
    }
  }
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

@media only screen and (max-width: 959px) {
  .header-wrapper {
    .top-links-section {
      display: inline-block;
      height: 0px;
      .right-menu {
        display: block;
        float: right;
        color: #24272a;
      }
      .shopping-bag {
        position: absolute;
        right: 0px;
        margin-top: 40px;
        .shopping-cart-icon {
          font-size: 38px;
        }
      }
    }
    .shop-title-container {
      .drawer-wrapper {
        display: inline-block;
      }
    }
  }

  .content-hover {
    cursor: pointer;
    .icon {
      color: #24272a;
    }
  }

  .search-box {
    margin: 12px;
    margin-bottom: 0px;
  }

  .mob-logo {
    margin-top: 12px;
  }
}

@media only screen and (max-width: 599px) {
  .header-wrapper {
    .top-links-section {
      .shopping-bag {
        margin-top: 30px;
      }
    }
  }
  .search-box {
    margin: 0px 12px;
  }
}

@keyframes slide-banner {
  0%{
    transform:translateY(-100%);
    display: none;
  }
  3%{transform:translateY(0);}
  30.33%{transform:translateY(0);}
  33.33%{
    transform:translateY(100%);
    display: none;
  }
  100%{transform:translateY(100%);}
}
</style>

