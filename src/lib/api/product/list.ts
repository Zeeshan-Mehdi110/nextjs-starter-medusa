//@ts-nocheck
import axios from "axios";

export const getAllProducts = async () => {

  const options = {
    method: 'GET',
    url: 'https://unofficial-shein.p.rapidapi.com/products/list',
    params: {
      cat_id: '1980',
      adp: '10170797',
      language: 'en',
      country: 'US',
      currency: 'USD',
      sort: '7',
      limit: '20',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'f94a1cce3amsh189f3fc9bcb9c6cp1e35e1jsn70ed1431a76b',
      'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const products = response.data.info.products
    return products;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};