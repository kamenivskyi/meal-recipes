<template>
  <div>
    Home
    <router-link to="/recipes/12">
      <v-btn depressed>
        Recipes
      </v-btn>
    </router-link>
    <template v-if="randomRecipe">
      <random-recipe :data="randomRecipe" />
    </template>
  </div>
</template>

<script>
import RandomRecipe from "@/components/RandomRecipe";
import mealService from "@/services/MealService";

export default {
  components: { RandomRecipe },
  name: "Home",
  data: () => ({
    recipes: [],
    randomRecipe: null,
  }),
  created() {
    this.populateRandomRecipe();
  },
  methods: {
    async populateRandomRecipe() {
      const { recipes } = await this.fetchRandomRecipe();

      this.randomRecipe = recipes[0];
    },
    async fetchRandomRecipe() {
      const request = await mealService.getResource("/random");

      return request.data;
    },
  },
};
</script>
