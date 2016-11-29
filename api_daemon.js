var express = require('express');
var app = express();

app.use('/bin', express.static('web/bin'));

app.set('views', './pugs');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  const jsBundle = '/bin/bundle.js';
  res.render('home', { 
			jsBundleUri: jsBundle
	    });
});

app.listen(3003, function () {
  console.log('App listening on port 3003!');
});
