const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express()

const prisma = new PrismaClient()

app.get("/", (req,res)=>{
    res.send("Api is working")
})

//Get: localhost:3233/students

app.get("/students",async (req, res)=>{
    //db from frontend

    //db logic
    const studentsData = await prisma.User.findMany();



    //db to frontend
    res.send(studentsData)
})

app.get("/students/:roll_no",async (req, res)=>{
    //db from frontend
    const {roll_no} = req.params;
    console.log(roll_no)

    //db logic
    const studentsData = await prisma.User.findUnique({
        where:{
            roll_no: roll_no,
        },
    });
   

    //db to frontend
    res.send(studentsData)

 
})

app.listen(3233)