const express = require('express');

const app = express();
const _PORT = 3000;

app.get('/', function(req,res){
	res.send(`Node and express are running on port ${_PORT}`);
})

app.listen(_PORT,function(){
	console.log(`Server running on port ${_PORT}`);
})