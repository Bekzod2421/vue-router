<template>
  <h1>Product overwiev page</h1>
  <div>Product id is: {{ id }}</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>