const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require ("./models/Todo");
;

mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true});

mongoose.connection.once("open", () => {
    console.log("Mongodb connection established successfuly");
});

const PORT = 4000;

const app = express()

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    Todo.find((err, todos)=>{
        if(err){
            console.log(err);
        }else{
            res.json(todos);
        }
    });
});
app.post("/create", (req, res)=>{
    const todo = new Todo(req.body);
    todo
        .save()
        .then((todo)=>{
            res.json(todo);
        })
        .catch((err)=>{
            res.status(500).send(err.message);
        });
});


app.get("/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id,(err, todo)=>{
        res.json(todo);
    });
});


app.post("/:id", (req, res)=>{
    const id = req.params.id;
    Todo.findById(id,(err, todo)=>{
        if(!todo){
            res.status(404).send("Todo not found");
        }else
        {
            todo.fullname = req.body.fullname;
            todo.username = req.body.username;
            todo.email = req.body.email;
            todo.address = req.body.address;
            todo.phonenumber = req.body.phonenumber;
            todo.gender = req.body.gender;

            todo
            .save()
            .then ((todo) => {
                res.json(todo);
            })
            .catch((err) => res.status(500).send(err.message));
        }
    });
});
app.get("/delete/:id", (req, res)=>{
    const id =req.params.id;
    Todo.findByIdAndRemove(id,(err, todo)=>{
        if(!err){
            res.json(todo);
        }
        else{console.log('Error in Data delete:'+ err);}
        
    })
})

app.listen(PORT, ()=> {
    console.log("Server is running on port" + PORT) ;
});