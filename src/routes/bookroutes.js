const express = require("express")

const booksRouter = express.Router();
function router(nav){
    var books=[
        {
            title:"Oru Deshathinte Kadha",
            author:"S K Pottakkatt",
            genre:"Novel",
            img:"desam.jpeg"
        },
        {
            title:"Harry Potter & The Sorceres Stone",
            author:"J K Rowling",
            genre:"fanatsy fiction",
            img:"harry.jpeg"
        },
        {
            title:"Sherlok Holmes",
            author:"Arthur Conan Doyle",
            genre:"Adventure fiction",
            img:"sherlok.jpeg"
        },
        {
            title:"Kayar",
            author:"Thakazhi",
            genre:"Novel",
            img:"kayar.jpeg"
        },
        {
            title:"The Alchemist",
            author:"Paulo Coelho",
            genre:"fiction",
            img:"alchemist.png"
        },
        {
            title:"Wings Of Fire",
            author:"Dr. A P J Abdul Kalam",
            genre:"Non-fiction",
            img:"Wings-Of-Fire.jpg"
        },
        {
            title:"Nalukettu",
            author:"M T Vasudevan Nair",
            genre:"Novel",
            img:"nalukett.jpeg"
        }
    
    
    
    ]
    booksRouter.get("/",function(req,res){
        res.render("books",{
        
            title:"Books",
            nav,
            books
        
        })
        });
        booksRouter.get("/:id",function(req,res){
          const id= req.params.id
            res.render("book",{
            
                title:"Book",
                nav,
                book:books[id]
            
            })
            });
            return booksRouter;
}

module.exports = router;        