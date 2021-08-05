const express = require("express")

const authorsRouter = express.Router();
function router(nav){
    var authors=[
        {
            title:"S K Pottakkatt",
            nationality:"India",
            genre:"Novelist",
            img:"sk.jpg"
        },
        {
            title:"J K Rowling",
            nationality:"U.K",
            genre:"Fantasy,drama",
            img:"jkrowling.jpg"
        },
        {
            title:"Sir.Arthur Conan Doyle",
            nationality:"U.K",
            genre:"mystery",
            img:"arthur.jpeg"
        },
        {
            title:"Thakazhi Sivasankara Pilla",
            nationality:"India",
            genre:" Novelist",
            img:"thakazhi.jpeg"
        },
        {
            title:"Paulo Coehlo",
            nationality:"Brazil",
            genre:"Fiction",
            img:"paulo.jpeg"
        },
        {
            title:"M T Vasudevan Nair",
            nationality:"India",
            genre:"Novelist",
            img:"mt.jpeg"
        }
    
    ]
   
    authorsRouter.get("/",function(req,res){
        res.render("authors",{
        
            title:"Authors",
            nav,
            authors
        
        })
        });
        authorsRouter.get("/:id",function(req,res){
          const id= req.params.id
            res.render("author",{
            
                title:"Author",
                nav,
                author:authors[id]
            
            })
            });
            return authorsRouter
}

module.exports = router;        