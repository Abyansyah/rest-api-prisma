import { Router } from 'express';
import ProductController from './Controller';

const router = Router();

const Controller = new ProductController();

router.route('/product').get(Controller.get).post(Controller.post);
router.route('/product/:id').get(Controller.getOne).put(Controller.update).delete(Controller.delete);

export default router;
