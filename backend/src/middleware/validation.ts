import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurant")
    .isString()
    .notEmpty()
    .withMessage("restaurant must be a string"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
  body("devliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("devlivery must be a positive number"),
  body("estimateDeliveryTime")
    .isInt({ min: 0 })
    .withMessage("Estimated must be a positive number"),
  body("cuisines")
    .isArray()
    .withMessage("Cuisines must be an array")
    .not()
    .notEmpty()
    .withMessage("Cuisines must be an array"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*.name")
    .notEmpty()
    .withMessage("Menu items must be an array"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu items price is required and must be a positive number"),
  handleValidationErrors,
];
