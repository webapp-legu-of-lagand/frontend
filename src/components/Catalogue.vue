<script>
import PhoneView from "@/views/PhoneView.vue";

export default {
  components: { PhoneView },
  data: () => ({
    rules: [],
    priceRange: [0, 80000],
  }),
  phone: {
    type: Object,
    required: true,
  },
  methods: {
    handleRangeChange(value) {
      // Adjust the thumbs to prevent overlapping
      const range = value[1] - value[0];
      if (range < 10) {
        this.priceRange[1] = this.priceRange[0] + 10;
      }
    },
  },
};
</script>

<template>
  <v-app theme="dark">
    <div class="catalogue">
      <div class="search-box">
        <v-text-field
          label="Search"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </div>

      <div class="filter">
        <!--   filter box implementation goes here   -->
        <div class="price-slider">
          <v-container>
            <v-range-slider
              v-model="priceRange"
              min="0"
              max="80000"
              step="100"
              label="Price Range"
              @change="handleRangeChange"
              strict
            ></v-range-slider>
            <div>
              Selected Price Range: ฿{{ priceRange[0] }} - ฿{{ priceRange[1] }}
            </div>
          </v-container>
        </div>
      </div>

      <div class="item-catalogue">
        <PhoneView :priceRange="priceRange" />
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.catalogue {
  max-width: 100%;
  margin: 0;
  padding: 1rem;
}
.search-box {
  width: 500px;
}
</style>
