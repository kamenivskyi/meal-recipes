import axios from "axios";

class MealService {
  apiKey = "17e741ec588c47f88538addd7c843240";
  apiBase = "https://api.spoonacular.com/recipes";
  baseURL = `${this.apiBase}?apiKey=${this.apiKey}`;

  async getResource(url) {
    const apiKeyQuery = url.includes("?")
      ? `&apiKey=${this.apiKey}`
      : `?apiKey=${this.apiKey}`;

    return await axios.get(`${this.apiBase}${url}${apiKeyQuery}`);
  }
}

export default new MealService();
