<template>
  <v-container justify-space-between>
    <v-layout d-flex justify-center>
      <v-flex md12 lg10 xl8>
        <v-layout
          row
          wrap
        >
          <v-flex
            md3
            pr-3
            class="hidden-sm-and-down"
          >
            <v-layout fill-height>
              <v-flex xs12 fill-height>
                <v-card
                  img="https://cdn2.jomashop.com/media//wysiwyg/sales-event/2018/side_banner_special_offers_03.jpg"
                >
                  <v-layout fill-height>
                    <v-flex xs12>
                      <v-layout
                        d-flex
                        column
                        align-space-between
                        justify-space-between
                        align-center
                        fill-height
                      >
                        <v-flex xs12>
                          <h2 class="title-offer">
                            SPECIAL OFFERS </h2>

                          <p>
                            Limited Time Deals </p>
                        </v-flex>

                        <v-flex
                          xs12
                          d-flex
                          align-end
                          pb-5
                        >
                          <v-btn
                            class="btn-special-offer"
                            large
                          >
                            SHOP NOW
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex
            xs12
            md9
            class="daily-deals"
          >
            <v-layout
              align-content-center
              justify-center
            >
              <h3 class="featured-product-title">
                <a>Featured Daily Deals</a>
              </h3>
            </v-layout>

            <v-layout>
              <v-flex xs4>
                <app-item-card/>
              </v-flex>

              <v-flex xs4>
                <app-item-card/>
              </v-flex>

              <v-flex xs4>
                <app-item-card/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ItemCard from '../shared-components/ItemCard';

export default {
  name: 'FeatureDaily',
  components: {
    'app-item-card': ItemCard,
  },
};
</script>

<style scoped lang="scss">
  .v-card {
    height: 100%;
  }

  .daily-deals {
    background: #f3f4f6;
  }

  .featured-product-title {
    font-weight: 400;
    font-size: 24px;
    color: #000;
    text-align: center;
    margin: 23px 0 24px;

    a {
      text-decoration: none;
      padding-bottom: 5px;
      color: #444;

      &:hover {
        border-bottom: solid 2px #444;
      }

    }
  }

  .title-offer {
    color: #FFFFFF;
    font-family: proxima-nova, sans-serif;
    padding-top: 50px;
    font-size: 27px;
    font-weight: bold;
  }

  p {
    color: #EDEDED;
    font-family: proxima-nova, sans-serif;
    padding-top: 5px;
    font-size: 18px;
    font-weight: normal;
  }

  .btn-special-offer {
    background-color: #454658 !important;
    color: white;
    border: 2px solid #fff !important;
    /*transition: all 0.3s;*/

    &:before {
      background-color: white !important;
    }

    &:hover {
      color: #454658 !important;
      background-color: white !important;
    }
  }
</style>
