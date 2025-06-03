import { Product } from '../types';

// api link
const API_URL = 'https://fakestoreapi.com';

// get all products and type them as a "product" interface array
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed');
    }
    // return response
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

// get product by id /products/{id}
export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error ${id}:`, error);
    return null;
  }
};