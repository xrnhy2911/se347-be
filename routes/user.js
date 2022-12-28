const middlewareController = require('../controllers/middlewareController');
const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/getuser',userController.getAllUsers);
router.delete('/:id',middlewareController.verifyTokenAndAdminAuth,userController.deleteUser);

module.exports = router;