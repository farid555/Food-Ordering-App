import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

// /api/my/resturant
router.post(
  "/",
  jwtCheck,
  jwtParse,
  validateMyRestaurantRequest,
  upload.single("imageFile"),
  MyRestaurantController.createMyRestaurant,
);

export default router;
