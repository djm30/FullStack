const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

app.set("view engine", 'ejs')
app.set("views", path.join(__dirname, 'views'))

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", {comments: comments})
})

app.get("/comments/new", (req, res) =>{
    res.render("comments/new")
})

app.post("/comments/", (req, res) => {
    let {username, comment} = req.body
    comments.push({id: uuid(), username: username, comment: comment})
    res.redirect("/comments")
})

app.get("/comments/:id", (req, res) =>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render("comments/show", {comment})
})

app.patch("/comments/:id", (req, res) =>{
    const {id} = req.params
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect("/comments")
})

app.get("/comments/:id/edit", (req, res) =>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render("comments/edit", {comment})
})

app.get("/tacos", (req, res) => {
    res.send("/GET tacos response")
})

app.post("/tacos", (req, res) => {
    const {meat, quantity, name } = req.body
    res.send(`Ok, here are your ${quantity} ${meat} tacos `)
})

app.delete("/comments/:id", (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    comments = comments.filter(c => c.id !== id)
    res.redirect("/comments")
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})

// GET /comments - list all comments
// GET /comments/:id - get one comment (using id)

// POST /comments - create a comment

// PATCH /comments/:id - update a comment
// DELETE /comments/:id - delete a comment

