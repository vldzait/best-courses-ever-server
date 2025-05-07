const express =  require ("express");
const router = express.Router();
const lessonController = require ('../controllers/lesson.controller');

router
  .route('/:lessonId')
  .get(lessonController.readOne);
router
  .route('/')
  .get(lessonController.readAll)
  .delete(lessonController.destroy)
  .post(lessonController.create)
  .put(lessonController.update);

module.exports = router;
