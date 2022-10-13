import Home from "@/pages/Home";
import RecipePage from "@/pages/RecipePage";
import FoodList from "@/components/FoodList";

export const routes = [
  { path: "/", component: Home },
  { path: "/random", component: FoodList },
  { path: "/recipes/:id", component: RecipePage },
];
