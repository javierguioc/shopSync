import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const cartFilePath = path.join(__dirname, '../../data/cart.json');

const readCartFromFile = (): any[] => {
  const data = fs.readFileSync(cartFilePath, 'utf8');
  return JSON.parse(data);
};

const writeCartToFile = (cart: any[]) => {
  fs.writeFileSync(cartFilePath, JSON.stringify(cart, null, 2));
};

export const addProductToCart = (req: Request, res: Response) => {
  const cart = readCartFromFile();
  const newProduct = req.body;
  cart.push(newProduct);
  writeCartToFile(cart);
  res.status(201).json(newProduct);
};

export const modifyProductQuantity = (req: Request, res: Response) => {
  const cart = readCartFromFile();
  const { productId } = req.params;
  const { quantity } = req.body;

  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity = quantity;
    writeCartToFile(cart);
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const removeProductFromCart = (req: Request, res: Response) => {
  const cart = readCartFromFile();
  const { productId } = req.params;

  const updatedCart = cart.filter(item => item.id !== productId);
  writeCartToFile(updatedCart);

  res.status(204).end();
};
