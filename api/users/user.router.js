const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
} = require("./user.controller");

const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/", updateUser);

module.exports = router;
