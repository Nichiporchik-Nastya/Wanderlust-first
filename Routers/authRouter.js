const Router = require('express');
const router = new Router();
const controller = require('../Controllers/authController');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);
// router.get('/dashbord', controller.dashbord);



module.exports = router;