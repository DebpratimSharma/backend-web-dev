const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('dev'))    //third party middleware

app.use((req, res, next)=>{     //custom middleware
    console.log('This is middleware')
    return next()
})

app.get('/',(req, res, next)=>{    //custom middleware for specific route
    console.log('This is a targetted middleware')
    return next()
}, (req, res)=>{      //route handler 
    //res.send('Hello world')
    res.render('index.ejs')     //renders index.ejs file
})

app.get('/about', (req, res)=>{
    res.send("Abous us page")
})

app.get('/contact', (req, res)=>{
    res.send("Contact us page")
})

app.listen(3000)