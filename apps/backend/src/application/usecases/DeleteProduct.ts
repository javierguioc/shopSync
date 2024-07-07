import { ProductRepository } from '../ports/ProductRepository';

export class DeleteProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string) {
    await this.productRepository.deleteProduct(productId);
  }
}
