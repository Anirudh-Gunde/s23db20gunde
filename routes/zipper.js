var express = require('express');
const zipper_controlers= require('./controllers/zipper');
var router = express.Router();

/*
class Zipper{
  constructor(zipper_type, zipper_name, zipper_cost){
      this.zipper_type=zipper_type;
      this.zipper_name=zipper_name;
      this.zipper_cost=zipper_cost;
  }
}
*/

/* GET home page. 
router.get('/', function(req, res, next) {
  let z1= new Zipper('Sweatshirts','GAP',35);
  let z2= new Zipper('Trouser','CK',50);
  let z3= new Zipper('Shirt','Aeropostale',25);

res.render('zipper', { title: 'Search Results Zipper',Zipper : [z1,z2,z3] });
}); */



router.get('/', zipper_controlers.zipper_view_all_Page );
module.exports = router;
