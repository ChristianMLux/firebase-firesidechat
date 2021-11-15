<template>
  <section>
    <p>{{ user.name }} ist {{ user.age }} Jahre alt.</p>
  </section>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import firestore from "@/firestore";
export default {
  name: "GetUser",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUser() {
      const userRef = doc(firestore, "user", "oE9yeZT5ax5zo61EhsWP");
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        this.user = userSnapshot.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
  },
  async created() {
    await this.getUser();
  },
};
</script>
