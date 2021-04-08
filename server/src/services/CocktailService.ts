import { Cocktail } from "../models/Cocktail";

export default new (class CocktailService {
  public async FetchAll(): Promise<Cocktail[]> {
    return await Cocktail.findAll();
  }

})();
