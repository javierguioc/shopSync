import { CartItem } from '../domain/entities/CartItem';
import { Product } from '../domain/entities/Product';

const API_URL = 'http://localhost:3001/api/cart';

export const getCart = async (): Promise<CartItem[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch cart');
  const data: { id: string; products: Product[] } = await response.json();
  return data.products.map(product => new CartItem(product.id, product.quantity));
};

export const addProductToCart = async (cartId: string, item: CartItem): Promise<void> => {
  console.log('el item que se enviara es: ' + JSON.stringify(item));
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, product: { id: item.productId, quantity: item.quantity } }),
  });
  if (!response.ok) throw new Error('Failed to add product to cart');
};

export const updateCartItemService = async (cartId: string, productId: string, quantity: number): Promise<void> => {
  const response = await fetch(`${API_URL}/modify`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, productId, quantity }),
  });
  if (!response.ok) throw new Error('Failed to update cart item');
};

export const deleteCartItem = async (cartId: string, productId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, productId }),
  });
  if (!response.ok) throw new Error('Failed to delete cart item');
};
