var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

router.get('/', usersController.list);
router.post('/', usersController.create);
router.get('/:usersID', usersController.usersGet, usersController.usersByID);
router.put('/:usersID', usersController.update);
router.delete('/:usersID', usersController.remove);

module.exports = router;
