import User from "../models/userModel.js"
import CarListing from "../models/ListingModel.js"
import { errorHandler } from "../utilities/error.js"

    export const updateUser = async (req, res, next) => {
        if (req.user.id !== req.params.id) return next(errorHandler(
            401,'You can only update your own account'
        )) 
        try {
            if (req.body.password) {
                req.body.password = bcryptjs.hashSync(req.body.password,10)
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                 }
            }, { new: true })
            
            const { password, ...rest } = updatedUser._doc
            res.status(200).json(rest);
         } catch (error){
            console.log(error)
            next(error)
           
        }
    }
    




    export const  deleteUser = async (req,res,next) => {
        if(req.user.id !== req.params.id) return next(errorHandler(401,'You can only delete your own account'))
          try {
              await User.findByIdAndDelete(req.params.id)
              res.clearCookie('access_token')
              res.status(200).json('User has been deleted')
          }
          catch (error) {
              next(error)
          }
      
      }



export const createCarListing = async (req, res, next) => {
    if (req.user.id !== req.body.owner.toString()) return next(errorHandler(
        401,'Sign In to create a Listing'
    )) 

    try {
        const listing = await CarListing.create(req.body);
        return res.status(201).json(listing); 
    } catch (error) {
        next(error); 
    } 
      }