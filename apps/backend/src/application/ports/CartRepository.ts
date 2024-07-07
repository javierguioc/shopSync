import { Cart } from '../../domain/entities/Cart';

export interface CartRepository {
  getCartById(cartId: string): Promise<Cart>;
  saveCart(cart: Cart): Promise<void>;
}
