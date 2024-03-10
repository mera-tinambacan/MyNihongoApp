const express = require("express");
const noteController = require("../controllers/noteControllers")
const searchController = require("../controllers/noteControllers");

const router = express.Router();

// Retrieve all active products route
router.get("/allNotes", noteController.getAllNotes);

// Search lessons route
router.get("/search/:key", searchController.searchNotes);

module.exports = router;