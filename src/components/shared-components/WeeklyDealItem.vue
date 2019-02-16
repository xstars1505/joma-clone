<template>
  <v-container class="deal-containter" fluid>
    <v-layout row class="layout-wrapper" :class="{ 'reverse-direction': reverse }">
      <v-flex d-flex class="banner-section">
        <v-img
          position="top"
          contain
          :src="dealItem.bannerSource"
        ></v-img>
      </v-flex>

      <v-flex d-flex class="info-section">
        <div class="info-wrapper">
          <div class="info-header">
            <h3>{{ dealItem.brand }}</h3>

            <p class="sub-header hidden-md-and-down">
              {{ dealItem.subHeader1 }}
              <br>
              {{ dealItem.subHeader2 }}
            </p>
          </div>

          <div class="deal-info">
            <p class="deal-description">
              {{ dealItem.dealDescription1 }}
              <br>
              {{ dealItem.dealDescription2 }}
            </p>
            <p class="code-container">use code <span class="code">{{ dealItem.saleCode }}</span></p>
          </div>

          <div class="prices">
            <p class="price">
              <span class="retail">RETAIL {{ dealItem.retailPrice }}</span>
              <span class="divider"></span>
              <span class="sale">SALE {{ dealItem.salePrice }}</span>
            </p>
            <p class="coupon-price">{{ dealItem.couponPrice }}</p>
            <p class="cp-post-text">after coupon</p>
          </div>

          <a class="deal-button" href="#">
            <span><span>SHOP {{ dealItem.brand }} </span></span>
          </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['reverse', 'dealItem'],
};
</script>

<style lang="scss" scoped>
.deal-containter {
  margin-bottom: 50px;
}
.banner-section {
  width: 65%;
}

.info-section {
  width: 35%;
  padding-left: 5%;
  .info-wrapper {
    .info-header {
      h3 {
        font-size: 26px;
        margin-bottom: 0;
      }
      p.sub-header {
        font-size: 16px;
        line-height: 24px;
        font-style: italic;
        color: #444;
      }
    }
    .info-header:after {
      content: '';
      display: inline-block;
      width: 100px;
      clear: both;
      border-bottom: solid 2px #444;
    }

    .deal-info {
      margin-top: 15px;
      p.deal-description {
        font-size: 16px;
        color: #444;
      }

      p.code-container {
        margin-top: 20px;
        font-size: 16px;
        font-family: georgia,sans-serif;
        font-style: italic;
        color: #444;

        span.code:before {
          content: "-";
          color: #444;
          padding: 0 5px;
        }

        span.code {
          color: #d80d0d;
          font-size: 19px;
        }

        span.code:after {
          content: "-";
          color: #444;
          padding: 0 5px;
        }
      }
    }

    .prices {
      margin-top: 15px;
      p.price {
        font-size: 14px;
        line-height: 23px;
        color: #444;
        width: 100%;
        display: block;
        margin-bottom: 0px;

        span {
          display: inline-block;
        }

        span.divider {
          width: 10px;
          margin: 0;
          background: 0 0;
          height: auto;
        }

        span.sale {
          text-decoration: line-through;
        }
      }

      p.coupon-price {
        font-size: 36px;
        font-style: italic;
        font-family: georgia,sans-serif;
        color: #d80d0d;
        line-height: 52px;
        margin-top: 5px;
        margin-bottom: 0px;
        display: inline-block;
      }

      p.cp-post-text {
        font-size: 16px;
        font-style: italic;
        font-family: georgia,sans-serif;
        color: #444;
      }
    }

    .deal-button {
      margin-top: 20px;
      display: block;
      text-decoration: none;
      >span {
        border: solid 1px #444;
        padding: 10px 30px;
        display: inline-block;

        span {
          text-decoration: none;
          font-size: 16px;
          color: #444;
        }
      }
    }
  }
}

@media only screen and (min-width: 769px) {
  .reverse-direction {
    flex-direction: row-reverse;
    .info-section {
      padding-left: 0px;
      padding-right: 5%;

      .info-wrapper {
        text-align: right;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .layout-wrapper {
    display: block;
  }

  .banner-section {
    width: 100%;
  }

  .info-section {
    width: 100%;
    max-width: none;
    float: left!important;
    text-align: left!important;
    padding-left: 10%!important;
    padding-right: 10%!important;
    margin-bottom: 50px;
    .info-wrapper {
      .info-header {
        margin-top: 40px;
        .sub-header {
          display: block !important;
          br {
            display: none;
          }
        }
      }
      .deal-info {
        margin-top: 15px;
        p.deal-description {
          br {
            display: none;
          }
        }
      }
    }
  }
}
</style>

