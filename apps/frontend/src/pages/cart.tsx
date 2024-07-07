import { useCartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateCartItem, removeFromCart } = useCartContext();

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartItem(productId, quantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            <span>{item.productId}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.productId, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
