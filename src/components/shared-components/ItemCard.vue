<template>
  <v-card flat>
    <v-img
      src="https://www.jomashop.com/media/catalog/product/cache/1/featured_product_image/360x/040ec09b1e35df139433887a97daa66f/h/m/hml-h78716333_feat.png"
    >
      <v-layout fill-height align-end justify-center>
        <v-flex xs12>
          <div class="quick-view has-transition-effect">
            <a class=" has-transition-effect" href="javascript:" id="quickview-product-32060"
               onclick="quickviewproductid('https://www.jomashop.com/catalog/quickview/main/id/32060/type/simple/');"
               title="Quick View">QUICK VIEW</a>
          </div>
        </v-flex>
      </v-layout>
    </v-img>

    <v-card-title>
      <div>
        <strong>Whitehaven Beach</strong>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-layout align-space-around justify-start row class="price-box">
        <v-flex sm5 class="special-price">
          <span class="price">$745.00</span>
        </v-flex>

        <v-flex sm3 class="hidden-xs-only">
          <span class="savings-note">Save 63%</span>
        </v-flex>
      </v-layout>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ItemCard',
};
</script>

<style scoped lang="scss">
  .v-card {
    &:hover {
      cursor: pointer;
    }
  }

  .price-box {
    /*float: left;*/
    /*clear: both;*/
    /*margin: 0 10px 0 0;*/

    .special-price {
      display: inline;
      margin-bottom: 0;
      font-size: 12px;

      .price {
        font: 600 oblique 16px/24px "Georgia", serif;
        color: #333D4D;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .savings-note {
      white-space: nowrap;
      color: #9c0c0c;
      font: 600 normal 15px/ 12px "proxima-nova", sans-serif;
      text-transform: uppercase;
      padding: 2px 5px;
      line-height: 28px;
    }
  }

  .has-transition-effect {
    transition: opacity 250ms ease-out, transform 150ms cubic-bezier(0, 0.54, 0.37, 1);
  }

  .v-image {
    &:hover {
      .quick-view {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .quick-view {
    opacity: 0;
    background: rgba(255, 255, 255, 0.70);
    display: block;
    height: 76px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translate3d(0, 70px, 0);

    a {
      background: none repeat scroll 0 0 #414C5C;
      color: #FFFFFF;
      display: block;
      height: 34px;
      margin: 19px auto;
      text-align: center;
      width: 170px;
      text-decoration: none;
      border: 2px solid #414C5C;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 36px;
    }
  }
</style>
