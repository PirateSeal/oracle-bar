import { findAllCocktails, getCocktailsOrdered, prepareCocktail, updateDeliveryAsync, updateReadyAsync   } from "@/api/CocktailApi";

export default new class CocktailService {
  async updateReady(orderCocktailId: number) {
   await updateReadyAsync(orderCocktailId)
  }

  async updateDelivery(orderCocktailId: number) {
    await updateDeliveryAsync(orderCocktailId);
  }
  
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
