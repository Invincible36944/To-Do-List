 const express = require("express");
 const bodyParser = require("body-parser");
 const date = require(__dirname+"/date.js");

const app = express();

var items = ['Buy Food','Cook Food','Eat Food'];
let workitems = [];

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.set("view engine" , "ejs");

app.get('/', function(req, res) {

    let day = date.getDate();
   
    res.render("list", {
        listTitle: day,
        newlistitem: items
    });
    
})

app.post("/", function(req,res) {

    console.log(req.body);
    var item = req.body.newitem;
    if (req.body.list === 'Work List')
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res) {
    res.render('list',{
        listTitle: "Work List", 
        newlistitem: workitems
    })
})

app.get("/about", function(req, res) {
    res.render('about');
})

// app.post("/", function(req,res) {
//     var item = req.body.newitem;

//     workitems.push(item);
    
//     res.redirect("/work");

// })

 app.listen(3000, function () {
    console.log("listening on port 3000");
})