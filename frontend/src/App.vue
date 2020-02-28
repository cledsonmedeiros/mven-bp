<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({})
};
</script>

<style>
[v-cloak] {
  display: none !important;
}
</style>
