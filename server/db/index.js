const mongoose = require('mongoose')
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://jamesjefrin13:2yqva9i4fiqMeouO@cluster0.7frewjg.mongodb.net/')
.then(()=>console.log("connected mongodb db"))
.catch((e)=> console.log(e))