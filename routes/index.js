const express =  require ("express");
const router = express.Router();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const coursesRoute = require('./course.route');
const lessonRoute = require('./lesson.route');

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/courses', coursesRoute);
router.use('/lessones', lessonRoute);

module.exports = router;
