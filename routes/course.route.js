const express =  require ("express");
const router = express.Router();
const courseController = require ('../controllers/course.controller');

router
  .route('/:courseId')
  .get(courseController.readOne);
router
  .route('/')
  .get(courseController.readAll)
  .delete(courseController.destroy)
  .post(courseController.create)
  .put(courseController.update);

module.exports = router;
