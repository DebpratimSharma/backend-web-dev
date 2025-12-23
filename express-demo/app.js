const express = require('express')
const app = express()

app.use(express.json())    //built-in middleware to parse json data from request body
app.use(express.urlencoded({extended: true}))   //built-in middleware to parse url-encoded data from request body

app.use(express.static('public'))

const morgan = require('morgan')
app.use(morgan('dev'))    //third party middleware

// app.use((req, res, next)=>{     //custom middleware
//     console.log('This is middleware')
//     return next()
// })

app.get('/',(req, res, next)=>{    //custom middleware for specific route
    console.log('This is a targetted middleware')
    return next()
}, (req, res)=>{      //route handler 
    //res.send('Hello world')
    res.render('index.ejs')     //renders index.ejs file
})

app.get('/contact', (req, res)=>{       //get method: backend to frontend
    res.send("Contact us page")
})

app.get('/form', (req, res)=>{
    res.render('form.ejs')
})

app.post('/get-from-data', (req, res)=>{    //post method: frontend to backend
    console.log(req.body)
    res.send('data received')   
})

app.listen(3000)