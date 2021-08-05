const express = require('express');
const artistRouter = express.Router();

function router(nav){
    artistRouter.get('/',(req,res)=>{
        res.render("addAuthor",
        {   
            nav,
            title:'Library',
        });
    });

    artistRouter.get('/add',(req,res)=>{
        res.send('Author Added Succcessfully');
    });

    return artistRouter;
}
module.exports = router;



