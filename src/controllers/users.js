
const express = require("express");
const User = require("../models/users");

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */



const getAllUsers = async (req, res, next)=> {

    try {
        const users = await User.find();
        res.json(users);
        
    } catch (err) {
        next(err);
    }

   
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


const createUser = async (req, res, next)=> {

    try {
        let user = req.body;
        user = await User.create(user);
    
        user.id = 31651
        const result = {
            message: "User created",
            user
        }
        res.status(201).json(result);
        
    } catch (err) {
        next(err);        
    }    
  };

  /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateUser = async (req, res, next)=> {
    try {
        const {id} = req.params;    
        let user = req.body;
        user._id = id;
        await User.updateOne(user);
        user.id = id;
        const result = {
            message: "User updated",
            user
        }
      res.json(result); //http code 200 no hace falta ponerlo
        
    } catch (err) {
        next(err);
    }

};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req, res)=> {
    const result = {
        message: "User updated with patch"
    }
    res.status().json(result);
  };

  /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deleteUser = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        user.remove();
    
        const result= {
            message: `User with id ${id} deleted`
        }
        res.json(result);
        
    } catch (err) {
        next(err);        
    }
};

module.exports={
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}



