const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = ["Buy Food", "Cook Food", "Eat Food",];
var WorkItems = [];

app.get("/", (req, res) => {

    let day = date.getDate;
    res.render("lists", {
        listTitle: day,
        newListItems: items,
    })
})

app.get("/work", (req, res) => {
    res.render("lists", {
        listTitle: "Work List", newListItems: WorkItems
    });
})

app.post("/", (req, res) => {

    var item = req.body.newItem

    if (req.body.list === "Work") {
        WorkItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect('/');
    }
})

app.listen(3000, () => {
    console.log("Server running at port 3000")
})