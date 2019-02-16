<template>
  <v-container justify-space-between>
    <v-layout d-flex justify-center>
      <v-flex>
        <v-layout align-center column>
          <v-flex my-5>
            <section-header title="Weekly Deals" />
          </v-flex>

          <v-flex class="deals-wrapper">
            <weekly-deal-item
              v-for="(item, index) in new Array(4)"
              :key="index"
              :dealItem="dealItem"
              :reverse="index%2 != 0"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SectionHeader from '../shared-components/SectionHeader';
import WeeklyDealItem from '../shared-components/WeeklyDealItem';

export default {
  data: () => ({
    dealItem: {
      brand: 'SWAROVSKI',
      bannerSource: 'https://cdn2.jomashop.com/media//wysiwyg/sales-event/2019/big_banner_DIOR_christal.jpg',
      subHeader1: 'Slake & Stardust Series',
      subHeader2: 'Bracelets in 9 Styles',
      dealDescription1: 'TAKE AN EXTRA $10 OFF',
      dealDescription2: 'THESE SWAROVSKI BRACELETS',
      saleCode: 'EXSW25',
      retailPrice: '$69.00',
      salePrice: '$34.99',
      couponPrice: '$24.99',
    },
  }),
  components: {
    'section-header': SectionHeader,
    'weekly-deal-item': WeeklyDealItem,
  },
};
</script>

<style scoped>
.deals-wrapper {
  width: 100%;
}
</style>
