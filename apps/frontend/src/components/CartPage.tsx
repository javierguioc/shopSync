import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const { cartItems, updateCartItem, removeFromCart, loading } = useCartContext();

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartItem(productId, quantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  if (loading) {
    return (
      <div className={`${styles.cartPage} ${styles.loading}`}>
        <div className={styles.loadingSpinner}> loading ...</div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1>Shopping Cart</h1>
      <ul className={styles.cartItemsList}>
        {cartItems.map(item => (
          <li key={item.productId}>
            <CartItem item={item} modifyCartItem={handleUpdateQuantity} removeCartItem={handleRemoveItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
