import { CartRepository } from '../ports/CartRepository';
import { Cart } from '../../domain/entities/Cart'; 


export class ModifyProductQuantity {
  constructor(private cartRepository: CartRepository) {}

  async execute(cartId: string, productId: string, quantity: number) {
    let cart: Cart | undefined = await this.cartRepository.getCartById(cartId);

    if (!cart) {
      throw new Error(`Cart with id ${cartId} not found`);
    }
    cart.modifyProductQuantity(productId, quantity);
    await this.cartRepository.saveCart(cart);
  }
}
