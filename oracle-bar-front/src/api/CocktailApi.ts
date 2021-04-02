import axiosInstance from '../axios';

export const findAllCocktails = async () => (await axiosInstance.get('/cocktails')).data
export const prepareCocktail = async (cocktailCommandeId: number) => (await axiosInstance.post('/cocktails/ready', cocktailCommandeId)).data
export const getCocktailsOrdered = async () => (await axiosInstance.get('/cocktails-ordered')).data