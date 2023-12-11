<script setup>
import { ref, onMounted } from "vue";
import { db } from "../js/firebase.js";
import {
  collection,
  onSnapshot,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const phone = ref(null);
const props = defineProps({
  name: { required: true },
});

async function getPhones() {
  const q = query(collection(db, "phones"), where("name", "==", props.name));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    const phoneData = {
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
    phone.value = phoneData;
  }
}

onMounted(async () => {
  console.log("Connecting to Firebase");
  await getPhones();
});
</script>

<template>
  <div class="phone-detail">
    <div v-if="phone">
      <div class="image">
        <img :src="phone.image" alt="Phone Image" />
      </div>
      <div class="detail">
        <h1>{{ phone.name }}</h1>
        <div class="description">
          <div class="field" v-for="(value, key) in phone" :key="key">
            <template
              v-if="key !== 'image' && key !== 'name' && key !== 'brand'"
            >
              <h2>{{ key }}</h2>
              <div class="subField" v-if="typeof value === 'object'">
                <div v-for="(subValue, subKey) in value" :key="subKey">
                  <h3>{{ subKey }}</h3>
                  {{ subValue }} &nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <div v-else>{{ value }} &nbsp;&nbsp;&nbsp;</div>
              <hr />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

img {
  width: 30%;
}

.detail {
  display: flex;
  flex-direction: column;
}

.phone-detail {
  margin-top: 50px;
}

.description {
  border: solid seashell;
  border-width: 1px;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
  margin-left: 8px;
}

h1 {
  color: ghostwhite;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
}

h2 {
  color: ghostwhite;
  text-transform: uppercase;
}

h3 {
  color: lightgray;
  text-transform: uppercase;
}

.subField {
  display: inline-block;
  margin-left: 10px;
}

hr {
  margin: 10px 8px;
  border: 0.5px solid ghostwhite;
}
</style>
