
const jwt=require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')

const uri = 'mongodb+srv://shibi:Shibi%40123@cluster.jwdwx.mongodb.net/mongodb?retryWrites=true&w=majority';


mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected…')
    })
    .catch(err => console.log(err))
//for verify token middle ware is used
function verifyToken(req,res,next){
    //checking header is authorized
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    //extract token
    let token=req.headers.authorization.split(' ')[1]
    if(token===null){
        return res.status(401).send('Unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId=payload.subject
    next()
}//now add middleware to special events

router.get('/', (req, res) => {
    res.send('hello from api page')
})
//for insering values to collections in db
router.post('/users', (req, res) => {
    const userData = req.body
    const user = new User(userData);
    user.save((err, ruser) => {
        if (err) {
            console.log(err);
        } else {
            let payload={subject:ruser._id}
            let token=jwt.sign(payload,'secretkey')

            res.status(200).send({token})
        }
    })
})
//for checking the values of login credentials
router.post('/login',(req,res)=>{
    let userData=req.body
    //checking 
    User.findOne({email: userData.email},(error,user)=>{
        if (error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send("invalid email")
            }
            else
            if(user.password!==userData.password){
                res.status(401).send("Inavalid password")
            }
            else{
                let payload={subject:user._id}
                let token=jwt.sign(payload,'secretkey')
                res.status(200).send({token})
            }
        }
    }
    )

})

//to fecth regular and special events

//returning regular events
router.get('/events',(req,res)=>{
    let events=[
        {
            "_id":"1",
            "name":"Shibi",
            "age":"21"
        },
        {
            "_id":"2",
            "name":"Shibu",
            "age":"20"
        },
        {
            "_id":"3",
            "name":"babu",
            "age":"52"
        },
        {
            "_id":"4",
            "name":"Sheena",
            "age":"45"
        },
        {
            "_id":"5",
            "name":"janaki",
            "age":"76"
        },

    ]
    res.json(events)
})

//to fetch special events
router.get('/special',verifyToken,(req,res)=>{
    let specialEvents=[
        {
            "_id":"1",
            "name":"Shibi",
            "age":"21"
        },
        {
            "_id":"2",
            "name":"Shibu",
            "age":"20"
        },
        {
            "_id":"3",
            "name":"babu",
            "age":"52"
        },
        {
            "_id":"4",
            "name":"Sheena",
            "age":"45"
        },
        {
            "_id":"5",
            "name":"janaki",
            "age":"76"
        },

    ]
    res.json(specialEvents)
})


module.exports = router;