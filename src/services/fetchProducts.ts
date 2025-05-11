import axios from 'axios';

export interface Product {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

export interface ApiResponse {
  results: Product[];
}

const fetchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      'https://api.mercadolibre.com/sites/MLB/search',
      { params: { q: query } }
    );
    return response.data.results;
  } catch (error) {
  console.error('Error fetching products:', (error as Error).message);
  throw error;
}
};

export default fetchProducts;