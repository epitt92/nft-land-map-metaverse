const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const serverless = require('serverless-http')
const path = require('path')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
const router = express.Router();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
const port =  5000;
app.use(cors());
app.use(express.json());
router.use(require("./routes/landnfts"));
// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', router);  // path must route to lambda


app.listen(5000, () => {
	 // perform a database connection when server starts
	// dbo.connectToServer(function (err) {
    //     console.log("mongodb error")
	// 	if (err) console.error(err);
	// });
	console.log('Local app listening on port 5000!')
});

const { createCanvas,loadImage } = require('canvas')
const fs = require('fs')
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
/*
var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // password: "topsecret",
  port:"3306",
  database:"metatruffy"
});


sql = "SELECT *FROM nft_pilot";
con.query(sql, function (err, result) {
	if (err) throw err;
	var arr_result = {};
*/
	// const width =10000
	// const height = 6750

	// const cvs = createCanvas(width, height)
	// const context = cvs.getContext('2d')

	// loadImage('./sample.png').then(image => {
	// 	context.drawImage(image, 0, 0, width, height)
	// 	context.lineWidth = 1;
	// 	context.fillStyle = "#ffffff";
	// 	context.strokeStyle = "#000000"
	// 	// console.log(result.length)
	
	// 	context.beginPath();
	// 	for (let index = 0; index < 1000; index++) {
	// 		// var temp = result[index];
	// 		console.log(index)
	// 		// arr_result[temp['posX']+'_'+temp['posY']] = temp;
	// 		context.moveTo(index*10+1, 0);
	// 		context.lineTo(index*10+1, height)
			
	// 	}
	// 	for (let index = 0; index < 675; index++) {
	// 		// var temp = result[index];
	// 		// console.log(index)
	// 		// arr_result[temp['posX']+'_'+temp['posY']] = temp;
	// 		context.moveTo(0, index*10);
	// 		context.lineTo(width, index*10)
			
	// 	}
	// 	context.stroke()
	
	// 	const buffer = cvs.toBuffer('image/png')
	// 	fs.writeFileSync('./public/test.png', buffer)
	// })
	/*
	// return response.json(arr_result);
	// return response.json(result);
});
*/
// } )
// con.end();

// let myobj = {
//   email: req.body.email,
//   wallet: req.body.wallet,
//   balance: req.body.balance,
//   phone: req.body.phone,
//   vip: req.body.vip, 
//   timestamp: new Date()
// };
// let success = true;
// console.log(myobj)
// db_connect.collection("users").findOne({email: myobj["email"], wallet: myobj["wallet"], vip: myobj["vip"]}, (err, res) => {
//   if (err) throw err;
//   if (res !== null){
//     return response.status(400).send({message: 0})
//   } 
//   db_connect.collection("users").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     return response.json(res);
//   });
// })

module.exports = recordRoutes;

module.exports = app;
module.exports.handler = serverless(app);
