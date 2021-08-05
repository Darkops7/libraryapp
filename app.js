const express = require("express");


const app = express();

const nav = [
    {link:'/books',name:'Books'},

    {link:'/authors',name:'Authors'},

    {link:'/admin',name:'Add Book'},

    {link:'/artist',name:'Add Author'},

    {link:'/signup',name:'Sign Up'},

    {link:'/signin',name:'Sign In'}


];

const booksRouter = require('./src/routes/bookroutes')(nav);

const authorsRouter = require("./src/routes/authorRoutes")(nav);

const adminRouter = require("./src/routes/adminRoutes")(nav);

const artistRouter = require("./src/routes/artistRoutes")(nav);

const signupRouter = require("./src/routes/signupRoutes")(nav);

const signinRouter = require("./src/routes/signinRoutes")(nav);


app.use(express.static('./public'));

app.set('view engine','ejs');

app.set('views','./src/views');

app.use('/books',booksRouter);

app.use("/authors",authorsRouter);

app.use("/admin",adminRouter);

app.use("/artist",artistRouter);

app.use("/signup",signupRouter);

app.use("/signin",signinRouter);

app.get('/',(req,res)=>{
    res.render("index",
    {
        nav,
        title:'Library'
    });
});



app.listen (3000);

