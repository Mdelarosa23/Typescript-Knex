import { Router, Request, Response } from 'express';
import { PersonController } from '../controllers/PersonsController';
import { FieldsController } from '../controllers/FieldsController';
import { FormController } from '../controllers/FormController';
const router = Router();

const personController = new PersonController();
const fieldsController = new FieldsController();
const formController = new FormController();

router.post('/person-create', personController.create);
router.get('/person-list', personController.read);
router.put('/person-update/:id', personController.update);
router.delete('/person-delete/:id', personController.delete);

router.post('/fields-create', fieldsController.create);
router.get('/fields-list', fieldsController.read);
router.put('/fields-update/:id', fieldsController.update);
router.delete('/fields-delete/:id', fieldsController.delete);

router.post('/form-create', formController.create);
router.get('/form-list', formController.read);
router.put('/form-update/:id', formController.update);
router.delete('/form-delete/:id', formController.delete);

export default router;