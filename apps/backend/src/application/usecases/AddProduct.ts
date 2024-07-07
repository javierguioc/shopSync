import { ProductRepository } from '../ports/ProductRepository';
import { Product } from '../../domain/entities/Product';

export class AddProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(product: Product) {
    await this.productRepository.addProduct(product);
  }
}
