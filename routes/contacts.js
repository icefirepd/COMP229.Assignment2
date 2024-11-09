var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:contactsID', contactsController.contactsGet, contactsController.contactsByID);
router.put('/:contactsID', contactsController.update);
router.delete('/:contactsID', contactsController.remove);

module.exports = router;
