import express from 'express';

const app = express();


app.set('view engine' , 'ejs');
app.set('views' , pat)
app.get('/' , (req , res)=>{
    res.send("Welcome to Job portal")
});




app.listen(3000 , ()=>{
    console.log("sever is listening to the port 3000 .")
})