const express = require('express');
const signinRouter = express.Router();

function router(nav){
    signinRouter.get('/',(req,res)=>{
        res.render("signin",
        {   
            nav,
            title:'Library',
        });
    });

    signinRouter.get('/add',(req,res)=>{
        res.send('signed Up Succcessfully');
    });

    return signinRouter;
}
module.exports = router;






