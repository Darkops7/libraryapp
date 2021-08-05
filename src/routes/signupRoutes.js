const express = require('express');
const signupRouter = express.Router();

function router(nav){
    signupRouter.get('/',(req,res)=>{
        res.render("signup",
        {   
            nav,
            title:'Library',
        });
    });

    signupRouter.get('/add',(req,res)=>{
        res.send('signed Up Succcessfully');
    });

    return signupRouter;
}
module.exports = router;






