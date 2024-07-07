import { Product } from '../../domain/entities/Product';

export interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(productId: string): Promise<Product>;
  addProduct(product: Product): Promise<void>;
  updateProduct(product: Product): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}
