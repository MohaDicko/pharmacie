const express = require('express');
const router = express.Router();

const MailingController = require('../controllers/MailingController');


router.post('/sendemail', MailingController.sendEmail);


module.exports = router;