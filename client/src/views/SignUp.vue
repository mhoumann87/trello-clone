<template>
  <v-container fluid>
    <v-layout column align-center>
      <v-form v-if="!loading" v-model="valid" @submit.prevent="signUp" @keypress.prevent.enter>
        <v-text-field v-model="user.username" :rules="notBlankRules" label="Username" required></v-text-field>
        <v-text-field
          v-model="user.displayName"
          :rules="notBlankRules"
          label="Display name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="notBlankRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.confirmPassword"
          :rules="confirmPasswordRules"
          label="Confirm Password"
          type="password"
          required
        ></v-text-field>
        <v-text-field v-model="user.imgUrl" label="Avatar url"></v-text-field>
        <v-btn type="submit" :disabled="!valid">Signup</v-btn>
      </v-form>
      <v-progress-circular v-if="loading" :size="70" :width="7" color="green" indeterminate></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "signUp",
  data: vm => ({
    valid: false,
    user: {
      username: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      imgUrl: ""
    },
    notBlankRules: [value => !!value || "Cannot be empty"],
    confirmPasswordRules: [
      value => !!value || "cannot be blamk",
      confirmPassword =>
        confirmPassword === vm.user.password || "Password must match"
    ]
  }),
  computed: {
    ...mapState("users", { loading: "isCreatePending" })
  },
  methods: {
    signUp() {
      if (this.valid) {
        const { User } = this.$FeathersVuex;
        const user = new User(this.user);
        user.save().then(user => {
          console.log(user);
          this.$router.push("/login");
        });
      }
    }
  }
};
</script>