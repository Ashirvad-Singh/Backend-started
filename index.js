const express=require('express')
const app=express()
const path=require('path')
const port=8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.get('/',function(req,res){
    res.render('index')
})
app.listen(port,function(){
    console.log(`Server is running on port ${port}`)
})


