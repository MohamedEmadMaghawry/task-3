const express=require("express")
const app=express()
const port=process.env.PORT||3000



const path=require("path")

// const x=path.join(__dirname,"../public")
// app.use(express.static(x))

// app.get("/",(req,res)=>{
// res.send("Hello boba")
// })

// ///////////////////////////
// app.get("/shop",(req,res)=>{
//     res.send("this is shopping page")
// })

// /////////////////////////////

// app.get("/profile",(req,res)=>{
//     res.send("this is profile page")
// })

// /////////////////////////
// app.get("/products",(req,res)=>{
//     res.send("this is products page")
// })


/////
////hbs

app.set("view engine","hbs")
const viewsDirectory=path.join(__dirname,"../templet1/views")
app.set("views",viewsDirectory)

//////
var hbs=require('hbs')
const partialPath=path.join(__dirname,"../templet1/partials")
hbs.registerPartials(partialPath)


app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render('index',{
        title:"Home Page",
        desc:"This is Home Page",

    })
})
app.get("/service",(req,res)=>{
    res.render('service',{
        title:"Service",
        name:"Mohamed",
        city:"Alex",
        age:30,
        img1: "images/p1.jpg"

    })
})
app.get("/team",(req,res)=>{
    res.render('team',{
        title:"team",
        name:"Hady",
        city:"Cairo",
        age:25,
        img2: "images/p2.jpg"

    })
})
app.get("/portofolio",(req,res)=>{
    res.render('portofolio',{
        title:"portfolio",
        name:"Ibrahim",
        city:"asyout",
        age:26,

    })
})

app.get("/end",(req,res)=>{
    res.render('end',{
        title:"End",
    })
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port} http://localhost:3000/`)
})


