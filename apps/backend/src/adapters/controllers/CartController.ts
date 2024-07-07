import { Request, Response } from 'express';
import { AddProductToCart } from '../../application/usecases/AddProductToCart';
import { ModifyProductQuantity } from '../../application/usecases/ModifyProductQuantity';
import { Product } from '../../domain/entities/Product';
import { JsonCartRepository } from '../../infrastructure/repositories/JsonCartRepository';
import { Cart } from '../../domain/entities/Cart';
import { DeleteProductFromCart } from '../../application/usecases/DeleteProductFromCart';

const cartRepository = new JsonCartRepository();

export const addProductToCart = async (req: Request, res: Response) => {
  const { cartId, product } = req.body;
  console.log(req.body)
  const useCase = new AddProductToCart(cartRepository);
  await useCase.execute(cartId, new Product(product.id, product.name, product.price, product.quantity));
  res.status(200).send('Product added to cart');
};

export const modifyProductQuantity = async (req: Request, res: Response) => {
  const { cartId, productId, quantity } = req.body;
  const useCase = new ModifyProductQuantity(cartRepository);
  await useCase.execute(cartId, productId, quantity);
  res.status(200).send('Product quantity modified');
};

export const getCart = async (req: Request, res: Response) => {
  const cartId = req.query.cartId as string;

  try {
    const cart: Cart = await cartRepository.getCartById("default-cart-id");
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Failed to fetch cart');
  }
};


export const deleteProductFromCart = async (req: Request, res: Response) => {
  const { cartId, productId } = req.body;

  try {
    const useCase = new DeleteProductFromCart(cartRepository);
    await useCase.execute(cartId, productId);
    res.status(200).send('Product deleted from cart');
  } catch (error) {
    console.error('Error deleting product from cart:', error);
    res.status(500).send('Failed to delete product from cart');
  }
};