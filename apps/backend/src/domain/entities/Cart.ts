import { Product } from './Product';
import { CartInterface } from './CartInterface';

export class Cart implements CartInterface {
  id: string;
  products: Product[];

  constructor(id: string, products: Product[] = []) {
    this.id = id;
    this.products = products;
  }

  addProduct(product: Product) {
    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      if (existingProduct.quantity <= 0) {
        this.removeProduct(product.id);
      }
    } else {
      this.products.push(product);
    }
  }

  modifyProductQuantity(productId: string, quantity: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity;
      if (product.quantity <= 0) {
        this.removeProduct(productId);
      }
    }
  }

  removeProduct(productId: string) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
