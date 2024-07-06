import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const productsFilePath = path.join(__dirname, '../../data/products.json');

const readProductsFromFile = (): any[] => {
  const data = fs.readFileSync(productsFilePath, 'utf8');
  return JSON.parse(data);
};

const writeProductsToFile = (products: any[]) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

export const listProducts = (req: Request, res: Response) => {
  const products = readProductsFromFile();
  res.json(products);
};

export const addProduct = (req: Request, res: Response) => {
  const products = readProductsFromFile();
  const newProduct = req.body;
  products.push(newProduct);
  writeProductsToFile(products);
  res.status(201).json(newProduct);
};
