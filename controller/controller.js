var Userdb = require('../model/model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"The data cannot be inserted"});
        return;
    }
    console.log(req.body.Phone_Number);
    const user= new Userdb({
         First_Name:req.body.First_Name,
         Last_Name:req.body.Last_Name,
         Email:req.body.Email,
         Password:req.body.Password,
         Phone_Number:req.body.Phone_Number
    })

    // save user in the database
     user
     .save(user)
     .then(data => {
         res.send(data)
         //res.redirect('/add-user');
     })
     .catch(err =>{
         res.status(500).send({
             message : err.message || "Some error occurred while creating a create operation"
         });
     });



}