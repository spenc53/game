var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

//router.get('/commands',function(req,res){
//  res.send();
//}

module.exports = router;
