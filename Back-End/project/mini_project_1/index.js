const { PrismaClient } = require("@prisma/client")
const express = require("express")
const app = express()

const prisma = new PrismaClient()

app.get("/", (req, res) => {
    res.send("Apis is Working")
})

//GET: localhost:3000/students
app.get("/students", async (req, res) => {

    //data from frontend


    //data from logic
    const studentData =  await prisma.User.findMany();


    //data to frontend

    res.send(studentData)

})



app.listen(3000)