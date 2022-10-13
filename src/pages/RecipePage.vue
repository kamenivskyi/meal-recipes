<template>
  <div>Recipe page {{ $route.params.id }}</div>
</template>

<script>
export default {
  data: () => ({
    recipe: null,
  }),
};
</script>

<style></style>
