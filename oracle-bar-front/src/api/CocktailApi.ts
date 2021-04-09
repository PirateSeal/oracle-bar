import axiosInstance from '../axios';

export const findAllCocktails = async () => (await axiosInstance.get('/cocktail')).data
export const prepareCocktail = async (cocktailCommandeId: number) => (await axiosInstance.post('/cocktail/ready', cocktailCommandeId)).data
export const getCocktailsOrdered = async () => (await axiosInstance.get('/cocktail/ordered')).data;
export const updateDeliveryAsync = async (orderCocktailId: number) => (await axiosInstance.post(`cocktail/delirery/${orderCocktailId}`)).data;
export const updateReadyAsync = async (orderCocktailId: number) => (await axiosInstance.post(`cocktail/ready/${orderCocktailId}`)).data;
