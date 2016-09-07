"use strict"
/* jshint node: true  */	// allows use strict
/* jshint asi: true */		// semi-colon stuff
/* jshint esnext: true */ 	// const, let

const express = require("express")
let app = express()

app.use(express.static('client'));

app.get('/something', function(req, res) {
	let obj = {id:1, name: 'one', description: 'sfsfsfsfs sfsfdsf'} 
	console.log(obj)
	res.send(obj)
});

app.get('/delay/*', function (req, res) {
	let delay = req.params[0]
	console.log('hit delay()', delay)

	setTimeout(function() {
		console.log('back from delay ' + delay)
		res.send('Hello from Delay - we delayed ' + delay);
	}, delay);
  
});

const port = 3000
app.listen(port, function() {
	console.log('javascript/test/server.js started on ' + port )
})