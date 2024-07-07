import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import { Product } from '../domain/entities/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};
