<template>
  <div class="buttonfilter">
    <button type="submit" class="button">
      <img :src="info.img" height="40" />
      <p>{{ info.filterName }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchFilterButton",
  props: ["info"],
};
</script>

<style>
.buttonfilter button {
  font-family: "Amatic SC", cursive;
  font-size: 30px;
  padding: 10px;
  background-color: #f2f1f1;
  border: 0;
  cursor: pointer;
  width: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
