import express from "express"
import { usercontroller } from "../../controller";

let router = express.Router();

router.get("/users", usercontroller.getAllUser);
router.get("/user/:userId", usercontroller.getUserById);
router.put("/user/:userId", usercontroller.updateUser);

router.post("/user", usercontroller.createUser);
router.delete("/user/:userId", usercontroller.deleteUser);


export default router;