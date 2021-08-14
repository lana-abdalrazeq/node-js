/** * Express Module */
const express = require('express');

/** * Express Router */
const router = express.Router();

/** * Post Controller */
const controller = require('../controllers/postController');

/** * Authentication Middleware */
const authMiddleware = require('../middlewares/authMiddleware');

/** * Create Post */
router.post('/', authMiddleware.authenticated, controller.create);

/** * Posts List */
router.get('/', controller.list);

/** * View Post */
router.get('/:id', controller.details);

/** * Update Post */
router.put('/:id', authMiddleware.authenticated, controller.update);

/** * Delete Post */
router.delete('/:id', authMiddleware.authenticated, controller.delete);

module.exports = router;