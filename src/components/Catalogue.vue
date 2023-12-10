<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
}
</script>

<template>

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
    </div>

    <div class="item-catalogue">
      <!--   smartphone items/cards goes here   -->
    </div>
  </div>

</template>

<style scoped>
.search-box {
  width: 500px;
}
</style>
