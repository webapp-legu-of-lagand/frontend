import { ref, onMounted } from "vue";
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

export { getPhones, phones };
