// src/api/productsAPI.js
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

// Async function to fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
