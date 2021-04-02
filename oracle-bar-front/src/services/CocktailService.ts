import { findAllAsync, createAsync } from "@/api/cocktailApi";
import  {Cocktail}  from "@/models/Cocktail";

export default class CocktailService {

    async create(cocktail : Cocktail) {
        throw 'Not implemented';
    // await createAsync(cocktail);
  }

    async findAll() {
        throw 'Not implemented';
    // return await findAllAsync();
  }
}
