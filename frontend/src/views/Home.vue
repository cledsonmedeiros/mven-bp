<template>
  <div class="text-center">
    <h1 class="display-3">MVEN-BP</h1>
    <h1 class="display-1">{{hoje}}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hoje: ""
    };
  },
  created() {
    setInterval(() => {
      this.$axios.get("util/datahora").then(response => {
        this.hoje = response.data.datahora.full;
      });
    }, 1 * 1000);
    this.$toast.success("Hello World");
  },
  methods: {}
};
</script>
