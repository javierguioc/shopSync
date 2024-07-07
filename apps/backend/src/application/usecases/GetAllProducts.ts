import { ProductRepository } from '../ports/ProductRepository';

export class GetAllProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute() {
    return await this.productRepository.getAllProducts();
  }
}
