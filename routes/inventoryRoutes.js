const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//ADD inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS

router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent blood records

router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organisation records
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

//get organisation records
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

module.exports = router;
