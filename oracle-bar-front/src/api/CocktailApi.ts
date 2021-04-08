import axiosInstance from '../axios';

export const findAllCocktails = async () => (await axiosInstance.get('/cocktail')).data
export const prepareCocktail = async (cocktailCommandeId: number) => (await axiosInstance.post('/cocktail/ready', cocktailCommandeId)).data
export const getCocktailsOrdered = async () => (await axiosInstance.get('/cocktails-ordered')).data