const express = require('express')
const app = express()


app.listen(3000, () =>{ 
    console.log("LISTENING ON PORT 3000")
})

// app.use( (req, res) =>{
//     console.log("REQUEST RECIEVED")
//     // console.dir(req)
//     // res.send("RESPONSE NOTED")
//     // res.send({color: "red", size: "big"})
//     res.send("<h1> Hi there </h1>")
// })


app.get("/cats", (req, res) =>{
    res.send("MEOW")
})

app.post("/cats", (req, res) =>{
    res.send("POST REQUEST HAS BEEN RECIEVED")
})

app.get("/dogs", (req, res) =>{
    res.send("WOOF")
})

app.get("/", (req, res) =>{
    res.send("<h1> This is the home page!</h1>")
})

app.get("/r/:subreddit", (req, res) =>{
    const {subreddit} = req.params;
    res.send(`<h1>Welcome to r/${subreddit}!</h1>`)
})

app.get("/r/:subreddit/:postID", (req, res) =>{
    const {subreddit, postID} = req.params;
    res.send(`<h1>Viewing post ${postID} on r/${subreddit}</h1>`)
})

app.get("/search", (req, res) =>{
    // console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }else{
        res.send(`<h1>Search results for ${q} </h1>`)
    }
})

app.get("*", (req, res) => {
    res.send("I dont know that path")
})