import { CartItem as CartItemType } from "../domain/entities/CartItem";
import styles from "../styles/CartItem.module.css";

type CartItemProps = {
  item: CartItemType;
  modifyCartItem: (productId: string, quantity: number) => void;
  removeCartItem: (productId: string) => void;
};

const CartItem = ({ item, modifyCartItem, removeCartItem }: CartItemProps) => {
  const handleUpdateQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    modifyCartItem(item.productId, newQuantity);
  };

  const handleRemove = () => {
    removeCartItem(item.productId);
  };

  return (
    <div className={styles.cartItem}>
      <h2>Product: {item.productId}</h2>
      <p>Quantity: {item.quantity}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={handleUpdateQuantity}
      />
      <button className={styles.removeButton} onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
