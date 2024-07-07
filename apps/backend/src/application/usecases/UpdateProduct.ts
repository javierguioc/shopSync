import { ProductRepository } from '../ports/ProductRepository';
import { Product } from '../../domain/entities/Product';

export class UpdateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(product: Product) {
    await this.productRepository.updateProduct(product);
  }
}
