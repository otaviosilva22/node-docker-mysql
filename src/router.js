const {Router} = require('express');

const CrudController = require('./controllers/crudController');


const router = Router();

const crudController = new CrudController();

router.post('/create', crudController.createUser);
router.post('/update', crudController.updateUser);
router.get('/read', crudController.readUser);
router.post('/delete', crudController.deleteUser)

module.exports = router;