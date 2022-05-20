import { Router, Request, Response } from 'express';
import { PersonController } from '../controllers/PersonsController';

const router = Router();

const personController = new PersonController();

router.post('/person-create', personController.create);
router.get('/person-list', personController.read);
router.put('/person-update/:id', personController.update);
router.delete('/person-delete/:id', personController.delete);

export default router;