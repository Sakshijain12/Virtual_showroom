let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let roomSchema = require("../models/bedRoom");

router.get("/", (req, res) => {
	roomSchema.find((error, data) => {
		if (error) {
		return next(error);
		} else {
		res.json(data);
			// console.log(req);
		}
	});
});

module.exports = router;
