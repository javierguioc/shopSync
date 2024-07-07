import { Request, Response } from 'express';
import { JsonProductRepository } from '../../infrastructure/repositories/JsonProductRepository';
import { GetAllProducts } from '../../application/usecases/GetAllProducts';
import { AddProduct } from '../../application/usecases/AddProduct';
import { UpdateProduct } from '../../application/usecases/UpdateProduct';
import { DeleteProduct } from '../../application/usecases/DeleteProduct';
import { Product } from '../../domain/entities/Product';

const productRepository = new JsonProductRepository();

export const getAllProducts = async (req: Request, res: Response) => {
  const useCase = new GetAllProducts(productRepository);
  const products = await useCase.execute();
  res.json(products);
};

export const addProduct = async (req: Request, res: Response) => {
  const { id, name, price, quantity } = req.body;
  const useCase = new AddProduct(productRepository);
  await useCase.execute(new Product(id, name, price, quantity));
  res.status(201).send('Product added');
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id, name, price, quantity } = req.body;
  const useCase = new UpdateProduct(productRepository);
  await useCase.execute(new Product(id, name, price, quantity));
  res.status(200).send('Product updated');
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const useCase = new DeleteProduct(productRepository);
  await useCase.execute(productId);
  res.status(200).send('Product deleted');
};
