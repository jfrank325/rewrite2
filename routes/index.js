/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const usersRoutes = require("./users");
const postsRoutes = require("./posts");

router.use("/api/auth", usersRoutes);
router.use("/api", postsRoutes);

module.exports = router;
