const express= require('express');
const cors= require('cors')
const mongoose= require("mongoose");
const validId= require('./models/User')
const CData= require('./models/Info')

mongoose.connect('mongodb+srv://atharv27:random166@project2.e0dapqb.mongodb.net/test?retryWrites=true&w=majority').
then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
});
const app= express();
app.use(express.json());
app.use(cors());

app.post('/checkinfo',async(req,res)=>{
    const {email,password}= req.body;
    const resp = await validId.findOne({Email:email,Password:password})
    console.log(resp)
    res.send(resp)
});
app.post('/insert',async(req,res)=>{
    let data = req.body;
    const newData = new CData(data);
    newData.save();
    res.json(data);
});
app.get('/getData',async(req,res)=>{
    const resp=await CData.find({});
    res.send(resp);
    console.log(resp)
})



app.listen(3001,()=>{
    console.log("server is running")
})