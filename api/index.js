const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')

dotenv.config()

mongoose.connect ( process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then (()=>console.log("DB connection successful"))
.catch((err)=>console.log(err));

app.use(express.json())


app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)





app.listen (8800, ()=> {
    console.log("Backend server is running")
})