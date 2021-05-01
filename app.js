const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const https = require('https');
//const popupS = require('popups');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
app.get("/", function(req, res) {

  if (arr1.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "enter p1 details",
      arr2: "",
      arr3: "",
      arr4: "",
      arr5: "",
      arr6: ""
    });
  } else if (arr2.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "",
      arr2: "enter p2 details",
      arr3: "",
      arr4: "",
      arr5: "",
      arr6: ""
    });
  } else if (arr3.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "",
      arr2: "",
      arr3: "enter p3 details",
      arr4: "",
      arr5: "",
      arr6: ""
    });
  } else if (arr4.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "",
      arr2: "",
      arr3: "",
      arr4: "enter p4 details",
      arr5: "",
      arr6: ""
    });
  } else if (arr5.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "",
      arr2: "",
      arr3: "",
      arr4: "",
      arr5: "enter p5 details",
      arr6: ""
    });
  } else if (arr6.length === 0) {
    res.render("index", {
      title: "Enter all the details",
      arr1: "",
      arr2: "",
      arr3: "",
      arr4: "",
      arr5: "",
      arr6: "enter p6 details"
    });
  } else {
    console.log("arr1 : ", arr1);
    console.log("arr2 : ", arr2);
    console.log("arr3 : ", arr3);
    console.log("arr4 : ", arr4);
    console.log("arr5 : ", arr5);
    console.log("arr6 : ", arr6);

    setTimeout(function() {
      ////enter your code here!!!!!!!!!!!!!!!!!!
      //// arr1 has p1's value and so on









      res.render("index", {
        title: "Hold On!",
        arr1: "",
        arr2: "",
        arr3: "",
        arr4: "",
        arr5: "",
        arr6: ""
      });
    }, 7000);

  }



});

app.post("/", function(req, res) {
  var max_vol = Number(req.body.max_vol);
  var min_vol = Number(req.body.min_vol);
  var max_time = Number(req.body.max_time);
  var min_time =Number( req.body.min_time);
  var delta_vol = Number(req.body.delta_vol);
  if (arr1.length === 0) {
    arr1 = [max_vol, min_vol, max_time, min_time, delta_vol];
    console.log(max_vol, min_vol, max_time, min_time, delta_vol);

  } else if (arr2.length === 0) {
    arr2 = [max_vol, min_vol, max_time, min_time, delta_vol];
  } else if (arr3.length === 0) {
    arr3 = [max_vol, min_vol, max_time, min_time, delta_vol];
  } else if (arr4.length === 0) {
    arr4 = [max_vol, min_vol, max_time, min_time, delta_vol];
  } else if (arr5.length === 0) {
    arr5 = [max_vol, min_vol, max_time, min_time, delta_vol];
  } else if (arr6.length === 0) {
    arr6 = [max_vol, min_vol, max_time, min_time, delta_vol];
  }

  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server Up and Running on Port 3000");
});
