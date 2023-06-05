const express=require("express");
const router = new express.Router();

router.get('/', (req,res)=>{
    let response={
        data:{
            item:[
                {
                    id:1, name:"list 1"
                },
                {
                    id:2, name:"list 2"
                },
                {
                    id:3, name:"list 3"
                }
            ]
        }
    }

    res.status(201).json(response);
})

module.exports=router;