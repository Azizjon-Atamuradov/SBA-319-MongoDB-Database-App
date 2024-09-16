
const express = require ("express");
const Car = require("../models/car.model.js")
const router = express.Router();
const {getCars, getCar, createCar, updateCar, deleteCar} = require('../controllers/car.controller.js')


router.get('/' , getCars)
router.get("/:id", getCar )
router.post("/", createCar)
router.put("/:id", updateCar)
router.delete("/:id", deleteCar)


module.exports = router;