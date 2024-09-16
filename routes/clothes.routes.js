
const express = require("express");
const Clothe = require("../models/clothes.model.js")
const router = express.Router();
const {getClothes, getClothe, createClothe, updatedClothe, deleteClothe} = require('../controllers/clothes.controller.js')




router.get('/', getClothes)
router.get("/:id", getClothe)
router.post("/", createClothe);
router.put("/:id", updatedClothe)
router.delete("/:id", deleteClothe)




module.exports = router;