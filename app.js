const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT||3000;

app.use(express.json());
app.use (express.urlencoded({extended: true}));

const CRUD=require('./routes/CRUD');

app.use('/api',CRUD);



app.use('/',function(req,res,next){
    res.sendStatus(404);

})

app.listen(PORT,()=>
    console.log('Server running on port:'+PORT+'073')
);