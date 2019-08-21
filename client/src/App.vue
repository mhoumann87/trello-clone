<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar>
        <span class="font-weight-light">TrelloClone</span>
      </v-toolbar>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy;2019 - made with inspiration from <a href="https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw" target="_blank"></a>the Coding Garden with CJ</a></span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
  fixed: true 
  })
};
</script>
