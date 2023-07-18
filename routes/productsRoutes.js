import express from 'express';
const router = express.Router();
import ProductController from '../controllers/ProductController.js'

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/:id', ProductController.getProduct)
router.post('/delete/:id', ProductController.deleteProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.get('/', ProductController.showProducts)

export default router