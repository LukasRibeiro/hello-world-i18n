var express = require('express');
  
var router = express.Router();

var i18n = require("i18n");
i18n.configure({
  locales: ['en', 'pt_BR', 'zh_HANS'],
  directory: __dirname + '../../locales',
  defaultLocale: 'zh_HANS'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: i18n.__('Hello World')});
});

module.exports = router;
