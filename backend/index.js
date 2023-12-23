const express = require('express')
// const userRouter = require('./routes/users/user');
const { connectMongoDb } = require('./config/connection');
// const dotenv = require('dotenv')
// dotenv.config();
const app = express();
app.use(express.json())
const port = 8080;
const sha256 = require('sha256')


connectMongoDb('mongodb+srv://yumyumyield:thZso1x1iNfdQyzh@cluster1.ovpn4vc.mongodb.net/user')

// app.use('/api/user', userRouter);
const Users = require('./models/users/userSchema')

//routes
app.post('/api/user', async (req, res) => {
    const body = req.body;
    const hashPassword=sha256.x2(body.password)
    // if (!body.firstName || body.lastName || body.password || body.email || body.gender) {
    //     return res.status(403).send({ msg: "All fields are required" })
    // }
    // else {
        const result = await Users.create(
            {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: hashPassword,
                gender: body.gender,
            }
        )
        res.status(201).json({ msg: "Success" });
        console.log(result);
    // }
})


app.listen(port, () => {
    console.log(`Server running  at port ${port}`)
})