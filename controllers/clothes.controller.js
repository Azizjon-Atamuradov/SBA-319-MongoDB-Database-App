const Clothe = require("../models/clothes.model");

///// get all clothes
const getClothes = async (req, res) => {
  try {
    const clothes = await Clothe.find({});
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/// get one clothes
const getClothe = async (req, res) => {
  try {
    const { id } = req.params;
    const clothe = await Clothe.findById(id);
    res.status(200).json(clothe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




////// create clothes
const createClothe = async (req, res) => {
  try {
    const clothe = await Clothe.create(req.body);
    res.status(200).json(clothe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




///update clothes
const updatedClothe = async (req, res) => {
  try {
    const { id } = req.params;

    const clothe = await Clothe.findByIdAndUpdate(id, req.body);

    if (!clothe) {
      return res.status(404).json({ message: "Clothes not found" });
    }

    const updatedClothe = await Clothe.findById(id);
    res.status(200).json(updatedClothe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



////// delete product
const deleteClothe = async (req, res) => {
  try {
    const { id } = req.params;

    const clothe = await Clothe.findByIdAndDelete(id);

    if (!clothe) {
      return res.status(404).json({ message: "Clothes not found" });
    }

    res.status(200).json({ message: "Clothes deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getClothes,
  getClothe,
  createClothe,
  updatedClothe,
  deleteClothe
};
