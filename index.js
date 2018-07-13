const express = require('express');
import mongoose from 'mongoose';
const bodyParser = require('body-parser');
import routes from './src/routes/crmRoutes';

const app = express();
const _PORT = 3000;

//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb',{
	useMongoClient: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', function(req,res){
	res.send(`Node and express are running on port ${_PORT}`);
})

app.listen(_PORT,function(){
	console.log(`Server running on port ${_PORT}`);
})