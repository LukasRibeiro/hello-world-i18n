const express = require('express');
const router = express.Router();
const i18n = require("i18n");

i18n.configure({
  locales: ['en', 'pt_BR', 'zh_HANS'],
  directory: __dirname + '../../locales',
  defaultLocale: 'en'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: i18n.__('Hello World')});
});

module.exports = router;
