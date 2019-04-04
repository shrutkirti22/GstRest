// const express = require('express');
// const app = express();
// var cors = require('cors')
// const fetch = require('node-fetch');

// app.listen(8000,()=>{
//     console.log("connected!!!!");
// })
// app.use(cors())

// app.get('/',function(req,res){
// res.send("server started")})


// app.route("dashboard/check").put((res,req)=>{
//     res.send("check",req.body)
// })
// console.log("hiee");

// app.route('/gt').get(async(req, res) => {
//     console.log("inside funcion-");
//     fetch('https://books.zoho.com/api/v3/organizations?organization_id=649249007', {
//         method: 'get',
//         headers: { 'Content-Type': 'application/json',
//         Authorization :"db36e02a50b57e081efe533a8a0f834b" },
//     })
//     .then(res => res.json())
//     .then(json =>{
//          console.log("data->",json)
//          res.send(json)
//         }
//         );
  
// });

// app.get('/',function(req,res){
// res.send("server started")})
// app.options("*",function(req,res,next){
//   res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    //other headers here
//     res.status(200).end();
// });

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

const express = require('express'),
    process = require('process');
const http = require('http');
var cors = require('cors'); // Already done “npm i cors --save-dev”



var request = require('request');
var app = express();
var options = {
    path: "https://books.zoho.com/api/v3/organizations?organization_id=649249007",
    method: 'GET',

    json: true,
    headers: {
        "Authorization": "db36e02a50b57e081efe533a8a0f834b",
        "content-type": "application/json",
        "accept": "application/json"
    },
}
app.use((req, res, next) => {
    console.time('request');
    next();
});


app.get('/data/getOrganisationData', (req, res) => {
    console.log('getOrganisationData');
    get_trustyou(function(resp){
        console.log(resp);
        res.send(resp)
    });
    
    function get_trustyou( callback) {
        var options = {
            uri : 'https://books.zoho.com/api/v3/organizations?organization_id=649249007',
            method : 'GET',
            headers: {
                "Authorization": "db36e02a50b57e081efe533a8a0f834b",
                "content-type": "application/json",
                "accept": "application/json"
            },
        }; 
        var res = '';
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res = body;
            }
            else {
                res = 'Not Found';
            }
            callback(res);
        });
    }

});
app.options('*', cors());

app.listen(8080);