const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/projectController');

router.get('/', ctrl.list);
router.get('/:slug', ctrl.get);
router.post('/', ctrl.create); // protect later with auth

module.exports = router;
