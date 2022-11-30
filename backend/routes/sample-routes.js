const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample-controller');

router.get('/get-all-sample', sampleController.getAll);
router.get('/get-by-id/:id', sampleController.getById);
router.post('/create-sample', sampleController.create);
router.put('/update-sample/:id', sampleController.update);
router.delete('/remove-sample/:id', sampleController.remove);

module.exports = router;
