const express = require('express')
const app=express();
app.use(express.json())
const router = express.Router();
const Users = require('../../models/users/userSchema')

//routes
app.post('/api/user', async (req, res) => {
    const result=await Users.create(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
        }
    )
    res.status(201).json({msg:"Success"});
    console.log(result);

})

module.exports = router;