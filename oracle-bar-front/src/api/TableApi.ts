import axiosInstance from '../axios';

export const findAllTables = async () => (await axiosInstance.get('/table')).data