import { findAllCocktails, getCocktailsOrdered, prepareCocktail   } from "@/api/cocktailApi";

export default class CocktailService {

    async findAll() {
      const cocktails =  await findAllCocktails();
      return cocktails;
  }

  async findAllOrderedCocktails() {
    const allOrderedCocktails =  await getCocktailsOrdered();
    return allOrderedCocktails;

  }

  async cocktailIsReady (cocktailCommandeId: number) {
    const allOrderedCocktails =  await prepareCocktail(cocktailCommandeId);
    return allOrderedCocktails;
  }
}
