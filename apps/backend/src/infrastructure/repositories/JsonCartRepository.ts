import { Cart } from '../../domain/entities/Cart';
import { CartRepository } from '../../application/ports/CartRepository';
import fs from 'fs';
import path from 'path';

const CARTS_FILE_PATH = path.resolve(__dirname, '../../../data/cart.json');

export class JsonCartRepository implements CartRepository {
  async getCartById(cartId: string): Promise<Cart> {
    try {
      const data = fs.readFileSync(CARTS_FILE_PATH, 'utf-8');
      const carts: any[] = JSON.parse(data); // Asegúrate de que estás parseando correctamente el JSON
      const cartData = carts.find((c: any) => c.id === cartId);
      
      if (!cartData) {
        throw new Error(`Cart with id ${cartId} not found`);
      }

      // Crear una instancia de Cart con los datos obtenidos
      const cart = new Cart(cartData.id, cartData.products);

      console.log('Cart retrieved:', cart);
      return cart;
    } catch (error) {
      console.error('Error reading cart file:', error);
      throw error;
    }
  }

  async saveCart(cart: Cart): Promise<void> {
    try {
      const data = fs.readFileSync(CARTS_FILE_PATH, 'utf-8');
      const carts: Cart[] = JSON.parse(data);
      const index = carts.findIndex((c: Cart) => c.id === cart.id);
      if (index !== -1) {
        carts[index] = cart;
      } else {
        carts.push(cart);
      }
      fs.writeFileSync(CARTS_FILE_PATH, JSON.stringify(carts, null, 2));
    } catch (error) {
      console.error('Error saving cart:', error);
      throw error;
    }
  }
}
