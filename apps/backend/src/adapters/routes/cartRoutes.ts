import { Router } from 'express';
import { addProductToCart, modifyProductQuantity,getCart, deleteProductFromCart } from '../controllers/CartController';

const router = Router();

router.post('/cart/add', addProductToCart);
router.put('/cart/modify', modifyProductQuantity);
router.get('/cart', getCart);
router.delete('/cart/delete', deleteProductFromCart);


export default router;
