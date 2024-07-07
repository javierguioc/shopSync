
import { useProducts } from '../hooks/useProducts';
import ProductList from '@/components/ProductList';
import CartPage from '@/components/CartPage'; 

const Home = () => {
  const { products, error } = useProducts();

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
      <CartPage />
    </div>
  );
};

export default Home;
