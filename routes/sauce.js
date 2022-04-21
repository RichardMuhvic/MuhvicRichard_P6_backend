const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.getAllUser);
router.post('/', auth, sauceCtrl.createUser);
router.get('/:id', auth, sauceCtrl.getOneUser);
router.put('/:id', auth, sauceCtrl.modifyUser);
router.delete('/:id', auth, sauceCtrl.deleteUser);

module.exports = router;