const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./user.controller");

const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
