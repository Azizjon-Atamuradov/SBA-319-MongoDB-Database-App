const Car = require("../models/car.model")


/// get all cars

const getCars = async (req, res) => {

    try {
        const cars = await Product.find({});
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

///get one car

const getCar = async (req, res) => {

    try {
        const {id} = req.params;
        const car = await Car.findById(id)
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

//// create car

const createCar = async ( req, res) => {

    try {
        const car = await Car.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

//// update  car

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;

        const car = await Car.findByIdAndUpdate(id, req.body )
        if(!car) {
            return res.status(404).json({ message: "Car not found"})
        }
        const updateCar = await Car.findById(id)
        res.status(200).json(updateCar)
    }catch (error) {
        res.status(500).json({ message: error.message})
    }
};


///// delete car

const deleteCar = async ( req, res) => {

    try {
        const {id} = req.params;

        const car = await Car.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Car not found"})
        }
        res.status(404).json({ message: "Car deleted succesfully"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

module.exports = {
    getCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
};


