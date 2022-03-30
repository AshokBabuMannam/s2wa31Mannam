var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     value =Number(search_params.get("x"))
    if(value == 0)
    value=Math.random()
    res.write("Computes the values for Math.atan and math.cbrt function."+"\n")
    res.write('Math.pow applied to '+value+" is "+Math.pow(value)+"\n");
    res.write('Math.sign applied to '+value+" is "+Math.sign(value)+"\n");
    res.end('Math.tanh applied to '+value+" is "+Math.tanh(value));
    res.end('Math.trunc applied to '+value+" is "+Math.trunc(value));
 });

module.exports = router;