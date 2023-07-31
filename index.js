import express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 2400;
var listArrayT = [];
var listArrayW = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/today", (req,res) => {
    res.render("today.ejs", {
        additionArray: listArrayT,
    })
})

app.get("/work", (req,res) => {
    res.render("work.ejs", {
        additionArray: listArrayW,
    })
})

app.post("/submitT", (req,res) => {
    var addToList = req.body["workToDo"]
    listArrayT.push(addToList);
    res.redirect("/today");
})

app.post("/submitW", (req,res) => {
    var addToList = req.body["workToDo"]
    listArrayW.push(addToList);
    res.redirect("/work");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})
