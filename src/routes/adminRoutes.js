const express = require('express');
const adminRouter = express.Router();

function router(nav){
    adminRouter.get('/',(req,res)=>{
        res.render("addbook",
        {   
            nav,
            title:'Library',
        });
    });

    adminRouter.get('/add',(req,res)=>{
        res.send('Book Added Succcessfully');
    });

    return adminRouter;
}
module.exports = router;



