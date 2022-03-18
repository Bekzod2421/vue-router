<template>
  <h1>Products</h1>
  <ul>
    <li v-for="item in product" :key="item.desc">
      <router-link :to="{ name: 'ProductDesc', params: { id: item.id } }">
        <h2>{{ item.name }}</h2>
      </router-link>
    </li>
    <!-- <i> {{ item.price }}</i>
      <p>{{ item.desc }}</p> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      product: [
        { name: "Samsung", price: 2000, desc: "A12", id: 1 },
        { name: "Apple", price: 5000, desc: "A12", id: 2 },
        { name: "Xiomi", price: 4000, desc: "A12", id: 3 },
        { name: "LG", price: 3000, desc: "A12", id: 4 },
      ],
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  width: 400px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
h2 {
  cursor: pointer;
  margin: 5px 0;
  background-color: gray;
  padding: 5px 10px;
  color: #fff;
  border-radius: 20px;
}
a {
  text-decoration: none;
}
</style>>
