import axios from 'axios';

export const GetSomeDataAsync = async (data: any) => {
  let response = await axios.get('');
  return response.data;
};

export const coreService = {GetSomeDataAsync};
