import { Product } from '../domain/entities/Product';
import { addProductToCart } from '../services/cartService';
import { useCartContext } from '../context/CartContext';


type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { cartId, addToCart } = useCartContext();

  const handleAddToCart = async () => {
    try {
      addToCart({ productId: product.id, quantity: 1 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Available: {product.quantity}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
