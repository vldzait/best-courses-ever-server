const express =  require ("express");
const router = express.Router();
const userController = require ('../controllers/user.controller');

router
  .route('/:userId')
  .get(userController.readOne);
router
  .route('/')
  .post(userController.create)
  .get(userController.readAll)
  .put(userController.update)
  .delete(userController.destroy);

module.exports = router;
