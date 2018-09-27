const express=require('express');
const app=express();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.listen(4000, function(){
    console.log("Server started on 4000");
})