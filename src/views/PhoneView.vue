<script setup>
import { ref, onMounted, computed } from "vue";
import { db } from "../js/firebase.js";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import PhoneCard from "../components/PhoneCard.vue";

const phones = ref([]);

async function getPhones() {
  onSnapshot(collection(db, "phones"), (querySnapshot) => {
    let phoneSnapshot = [];
    querySnapshot.forEach((doc) => {
      let phone = {
        name: doc.data().name,
        brand: doc.data().brand,
        image: doc.data().image,
        battery: doc.data().battery,
        body: doc.data().body,
        comms: doc.data().comms,
        display: doc.data().display,
        features: doc.data().features,
        launch: doc.data().launch,
        main_camera: doc.data().main_camera,
        memory: doc.data().memory,
        misc: doc.data().misc,
        network: doc.data().network,
        platform: doc.data().platform,
        selfie_camera: doc.data().selfie_camera,
        sound: doc.data().sound,
        tests: doc.data().tests,
      };
      phoneSnapshot.push(phone);
    });
    phones.value = phoneSnapshot;
  });
}

onMounted(async () => {
  console.log("Connecting to Firebase");
  await getPhones();
  console.log(phones);
});

const props = defineProps({
  priceRange: {
    type: Array,
    default: () => [0, 80000],
  },
});
const filteredPhones = computed(() => {
  return phones.value.filter(
    (phone) =>
      phone.misc.price >= props.priceRange[0] &&
      phone.misc.price <= props.priceRange[1]
  );
});
</script>

<template>
  <div class="Phones">
    <PhoneCard
      v-for="phone in filteredPhones"
      :key="phone.name"
      :phone="phone"
    />
  </div>
</template>

<style>
.Phones {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
}
</style>
