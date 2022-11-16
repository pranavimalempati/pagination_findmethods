const tutorialcontroller = require("../controller/tutorialController");
const express = require("express")
const router = express.Router();

router.post("/add", tutorialcontroller.add);
router.post("/pagedetails", tutorialcontroller.getPagination);
router.post("/findone", tutorialcontroller.findOne);
router.post("/findall", tutorialcontroller.findAll);
router.post("/findtitle", tutorialcontroller.findByTitle);



module.exports = router