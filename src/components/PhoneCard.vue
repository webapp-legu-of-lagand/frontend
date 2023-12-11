<script setup>
import { RouterLink } from "vue-router";

defineProps({
  phone: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: 'phone-details', params: { name: phone.name } }"
    class="details"
  >
    <div class="phone-card">
      <div class="image">
        <img :src="phone.image" alt="phone image" />
      </div>
      <div class="text-box">
        <h2>{{ phone.name }}</h2>
        <h2>฿{{ phone.misc.price }}</h2>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.details {
  text-decoration: none;
  color: gray;
}

img {
  width: auto;
}
.phone-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 400px;
  cursor: pointer;
  border: 3px solid;
  margin-bottom: 30px;
}

.image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
