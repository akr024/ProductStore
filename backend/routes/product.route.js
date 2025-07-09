import express from 'express';
import * as productCode from '../controllers/product.controller.js'
const router = express.Router();

router.get('/', productCode.getProducts)
router.post('/', productCode.postProduct);
router.patch('/:id', productCode.patchProduct)
router.delete('/:id', productCode.deleteProduct)

export default router;