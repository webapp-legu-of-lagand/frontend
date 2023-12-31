<script setup>
import { ref, onMounted } from "vue";
import { db } from "../js/firebase.js";
import {
  collection,
  onSnapshot,
  getDocs,
  where,
  query,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
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
      reviews: doc.data().reviews,
    };
    phone.value = phoneData;
  }
}

onMounted(async () => {
  console.log("Connecting to Firebase");
  await getPhones();
  console.log(phone);
});

const newReview = ref({
  content: "",
  rating: 1, // Default rating
});

const submitReview = async () => {
  if (!newReview.value.content.trim()) {
    alert("Please enter a review.");
    return;
  }

  try {
    const reviewData = {
      content: newReview.value.content,
      rating: newReview.value.rating,
      timestamp: Timestamp.now(),
    };

    await updateDoc(doc(db, "phones", phone.value.name), {
      reviews: [...phone.value.reviews, reviewData],
    });

    phone.value.reviews.push(reviewData);

    newReview.value.content = "";
    newReview.value.rating = 1;
  } catch (error) {
    console.error("Error adding review:", error);
  }
};

const formatTime = (timestamp) => {
  const date = timestamp.toDate();
  return date.toLocaleDateString();
};
</script>

<template>
  <div class="phone-detail">
    <div v-if="phone">
      <div class="image">
        <img :src="phone.image" alt="Phone Image" />
      </div>
      <div class="detail">
        <h1>{{ phone.name }}</h1>
        <h1>฿{{ phone.misc.price }}</h1>
        <div class="description">
          <div class="field" v-for="(value, key) in phone" :key="key">
            <template
              v-if="
                key !== 'image' &&
                key !== 'name' &&
                key !== 'brand' &&
                key !== 'reviews'
              "
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
      <div class="review">
        <h1>REVIEW</h1>
        <!--Review From-->
        <div class="review-form">
          <h3>Leave a Review</h3>
          <form @submit.prevent="submitReview">
            <textarea
              class="text-area"
              v-model="newReview.content"
              placeholder="Your review..."
            ></textarea>
            <label for="rating">Rating:</label>
            <input
              class="rating"
              type="number"
              v-model="newReview.rating"
              min="1"
              max="5"
            />
            <button id="submit" type="submit">Submit Review</button>
          </form>
        </div>
        <!--Displaying the reviews-->
        <div
          class="display-reviews"
          v-if="phone.reviews && phone.reviews.length > 0"
        >
          <div v-for="review in phone.reviews" :key="review.id" class="review">
            <p>{{ formatTime(review.timestamp) }} &nbsp;&nbsp;&nbsp;</p>
            <p>Rating: {{ review.rating }}/5 &nbsp;&nbsp;&nbsp;</p>
            <p>Comment: {{ review.content }} &nbsp;&nbsp;&nbsp;</p>
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
  margin-top: 2px;
  margin-bottom: 1px;
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

.review {
  margin-bottom: 20px;
}

.review-form {
  margin-bottom: 20px;
}

.text-area {
  color: ghostwhite;
  border: solid grey;
  border-radius: 10px;
  width: 579px;
  height: 80px;
}

p {
  color: ghostwhite;
  display: inline;
}

.rating {
  color: ghostwhite;
  border: solid grey;
  width: 40px;
}

#submit {
  background-color: grey;
  border-radius: 10px;
  padding: 5px;
  margin-left: 20px;
}
</style>
