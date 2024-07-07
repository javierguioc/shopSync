import { CartRepository } from '../ports/CartRepository';
import { Product } from '../../domain/entities/Product';
import { Cart } from '../../domain/entities/Cart';

export class AddProductToCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(cartId: string, product: Product) {
    try {
      let cart = await this.cartRepository.getCartById(cartId);

      if (!cart) {
        throw new Error(`Cart with id ${cartId} not found`);
      }

      cart = cart as Cart;

      console.log('los datos presentes son:', cart, typeof cart);
      cart.addProduct(product);
      await this.cartRepository.saveCart(cart);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      throw error;
    }
  }
}
