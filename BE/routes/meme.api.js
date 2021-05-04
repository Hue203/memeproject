const express = require("express");
const router = express.Router();
const uploadMid = require("../middleware/upload.helper");
const upload = uploadMid.upload;
const photoHelper = require("../middleware/photo.helper");
const memeController = require("../controllers/meme.controller");

/**
 * @route GET api/memes
 * @description Get all memes
 * @access Public
 */
router.get("/", memeController.getMemes, function (req, res, next) {
  res.json({ status: "ok", data: "Get all memes" });
});

/**
 * @route POST api/memes
 * @description Post a body to serve
 * @access Public
 */
router.post("/", function (req, res, next) {
  const requesData = req.body;
  res.json({ status: "ok", data: requesData });
  console.log(requesData);
});

/**
 * @route POST api/memes/create
 * @description Upload an img to serve
 * @access Public
 */

router.post(
  "/create",
  upload.single("image"),
  photoHelper.resize,
  memeController.createMeme,
  function (req, res, next) {
    console.log(req.file);
    res.json({ status: "ok" });
  }
);
/**
 * @route GET api/memes/images
 * @description Get list of original images
 * @access Public
 */
router.get("/images", memeController.getOriginalImages);

/**
 * @route PUT api/memes/:id
 * @description Update text on the meme
 * @access Public
 */
router.put("/:id", memeController.updateMeme);
module.exports = router;
