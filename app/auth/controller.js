const UserService = require('./service');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {

        try{

            // check if email and username already exist

            if(await UserService.findByEmail(req.body.email) && await UserService.isUsernameExist(req.body.username)){
                res.status(400);
                return json({message:'Username or Email already exist'});
            }

            const user = await UserService.create(req.body);
            res.code(201);

            return{
                message:"User created successfully",
                data:user
            }

        }
        catch(err){
            res.status(500);

            return {
                message:err.message
            }
        }

    },

    login: async (req, res) => {

        try{
            const user = await UserService.findByUsername(req.body.username);

            if(!user){
                res.status(404);
                return {
                    message:"User not found"
                }
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if(!isMatch){
                res.status(400);
                return {
                    message:"Invalid credentials"
                }
            }

            const token = jwt.sign({userID:user._id}, "secret");

            res.code(200);

            return {
                message:"Login successful",
                data:{
                    user,
                    token
                },
            }

        }
        catch(err){
            res.status(500);

            return {
                data:{
                    message:err.message,
                }
            }
        }

    }
};