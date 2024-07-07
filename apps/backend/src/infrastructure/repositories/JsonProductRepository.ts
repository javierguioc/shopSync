import { ProductRepository } from '../../application/ports/ProductRepository';
import { Product } from '../../domain/entities/Product';
import fs from 'fs';
import path from 'path';

const PRODUCTS_FILE_PATH = path.resolve(__dirname, '../../../data/products.json');

export class JsonProductRepository implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }

  async getProductById(productId: string): Promise<Product> {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    const products = JSON.parse(data);
    return products.find((product: Product) => product.id === productId);
  }

  async addProduct(product: Product): Promise<void> {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    const products = JSON.parse(data);
    products.push(product);
    fs.writeFileSync(PRODUCTS_FILE_PATH, JSON.stringify(products, null, 2));
  }

  async updateProduct(updatedProduct: Product): Promise<void> {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    const products = JSON.parse(data);
    const index = products.findIndex((product: Product) => product.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
    }
    fs.writeFileSync(PRODUCTS_FILE_PATH, JSON.stringify(products, null, 2));
  }

  async deleteProduct(productId: string): Promise<void> {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    let products = JSON.parse(data);
    products = products.filter((product: Product) => product.id !== productId);
    fs.writeFileSync(PRODUCTS_FILE_PATH, JSON.stringify(products, null, 2));
  }
}
