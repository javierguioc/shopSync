import { Router } from 'express';
import { addProductToCart, modifyProductQuantity, removeProductFromCart } from '../controllers/cartController';

const router = Router();

router.post('/', addProductToCart);
router.put('/:productId', modifyProductQuantity);
router.delete('/:productId', removeProductFromCart);

export default router;
