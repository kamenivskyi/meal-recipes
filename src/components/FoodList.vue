<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-lg-3 mb-4" v-for="item in items" v-bind:key="item.idMeal">
        <div class="card" style="width: 18rem;">
          <img v-bind:src="item.strMealThumb" class="card-img-top" :alt="item.strMeal">
          <div class="card-body">
            <h5 class="card-title">{{ item.strMeal }}</h5>
            <p class="card-text">Area: {{ item.strArea }}</p>
            <p class="card-text">Category: {{ item.strCategory }}</p>
            <a :href="item.strSource" class="btn btn-primary" target="_blank">Go to the site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FoodList',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
      .then(res => res.json())
      .then(res => {
        this.items = res.meals;
        console.log(res.meals);
      })
    console.log('Mounted')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>