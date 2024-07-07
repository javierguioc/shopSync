import { Router } from 'express';
import { getAllProducts, addProduct, updateProduct, deleteProduct } from '../controllers/ProductController';

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', addProduct);
router.put('/products', updateProduct);
router.delete('/products/:productId', deleteProduct);

export default router;
