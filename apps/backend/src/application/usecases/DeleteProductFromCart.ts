
import { CartRepository } from '../ports/CartRepository';

export class DeleteProductFromCart {
  constructor(private cartRepository: CartRepository) {}

  async execute(cartId: string, productId: string) {
    const cart = await this.cartRepository.getCartById(cartId);

    if (!cart) {
      throw new Error(`Cart with id ${cartId} not found`);
    }

    const updatedProducts = cart.products.filter(p => p.id !== productId);
    cart.products = updatedProducts;

    await this.cartRepository.saveCart(cart);
  }
}
