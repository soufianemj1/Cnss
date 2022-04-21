const jwt = require('jsonwebtoken')

exports.login =(req,res)=>{
try{   
       
       const {email,password} = req.body;
       if(email ==='admin' && password ==='admin'){
        const user = {
            email,
            password
        }
        const token = jwt.sign({user}, 'secretkey', {expiresIn: '1h'})
       
        res.cookie('token', token)
        res.send({
            token,
            role:"admin"
        })  
       }
       else{
        res.status(400).send({
            message:"Invalid credentials"
        })
       }
       

       


        
}
catch(err){
    res.status(400).send(err);
}
}