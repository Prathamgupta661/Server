const express=require('express');
const app=express();
const cors=require('cors')

const PORT=process.env.PORT || 3002;

const data=require('./data')
app.use(cors())
app.get('/api/candidates',(req,res)=>{
    res.send({data})
})



app.listen(PORT,()=>(console.log(`Server Started at ${PORT}`)))

