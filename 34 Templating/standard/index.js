const express = require("express");
const path = require("path");
const app = express();

const redditData = require("./data.json");

app.use(express.static(path.join(__dirname,"public")));

// console.log(redditData)

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'))


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render("subreddit.ejs", {...data})
    }else{
        res.render("notfound", {subreddit: subreddit})
    }
    // console.log(data)
})

app.get("/cats", (req, res) => {
    const cats = ["blue", "rocket", "monty", "stephanie", "winston"];
    res.render("cats", {cats: cats})
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", {rand: num})
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})