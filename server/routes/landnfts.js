const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:"3306",
  database:"metatruffy"
});


// This section will help you create a new record.
recordRoutes.route("/getall").get(function (req, response) {
  // con.connect(function(err){
    // if(err) throw err;
    sql = "SELECT *FROM nft_pilot";
    con.query(sql, function (err, result) {
      if (err) throw err;
      var arr_result = {};
      for (let index = 0; index < result.length; index++) {
        var temp = result[index];
        arr_result[temp['posX']+'_'+temp['posY']] = temp;
      }
      return response.json(arr_result);
      // return response.json(result);
    });
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
});

module.exports = recordRoutes;