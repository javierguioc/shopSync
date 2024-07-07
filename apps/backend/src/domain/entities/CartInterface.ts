
import { Product } from './Product';

export interface CartInterface {
  id: string;
  products: Product[];
  addProduct(product: Product): void;
}
