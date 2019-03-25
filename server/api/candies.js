
const router = require('express').Router()
const Candies = require ('../db/models/Candy')

router.get('/',async(req,res,next)=>{
  try {
    res.status(200).json(await Candies.findAll());
  } catch (error) {
    next(error)
  }
})

module.exports = router
