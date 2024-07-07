import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem } from '@/domain/entities/CartItem';
import { getCart, addProductToCart, updateCartItemService, deleteCartItem } from '../services/cartService';

type CartContextType = {
  cartId: string;
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (item: CartItem) => void;
  updateCartItem: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartId] = useState('default-cart-id'); 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const cart = await getCart();
        setCartItems(cart);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (item: CartItem) => {
    setLoading(true);
    try {
      await addProductToCart(cartId, item);
      const updatedCart = await getCart();
      setCartItems(updatedCart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateCartItem = async (productId: string, quantity: number) => {
    setLoading(true);
    try {
      await updateCartItemService(cartId, productId, quantity);
      const updatedCart = await getCart();
      setCartItems(updatedCart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId: string) => {
    setLoading(true);
    try {
      await deleteCartItem(cartId, productId);
      const updatedCart = await getCart();
      setCartItems(updatedCart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ cartId, cartItems, loading, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
