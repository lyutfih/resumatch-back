const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');
const { loginValidator, registerValidator } = require('../middlewares/validators/authValidator');
const validationErrorHandler = require('../middlewares/validationErrorHandler');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/register', registerValidator, validationErrorHandler, recruiterController.registerRecruiter);

router.post('/login', loginValidator, validationErrorHandler, recruiterController.loginRecruiter);

router.get('/:id', authMiddleware, recruiterController.getRecruiter);

module.exports = router;
