import { Router } from 'express';
import { listProducts, addProduct } from '../controllers/productController';

const router = Router();

router.get('/', listProducts);
router.post('/', addProduct);

export default router;
