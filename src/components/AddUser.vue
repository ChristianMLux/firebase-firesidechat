<template>
  <section>
    <input type="text" v-model="userName" /><button @click="addUser">
      AddUser
    </button>
  </section>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import firestore from "@/firestore";
export default {
  name: "AddUser",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    async addUser() {
      //Wenn wir keine automatisch generierte ID haben wollen, dann setDoc, wenn auto gen id, dann addDoc!
      const docRef = await addDoc(collection(firestore, "user"), {
        name: this.userName,
        age: "18",
        id: "23456",
      });
      console.log(docRef);
    },
  },
};
</script>
