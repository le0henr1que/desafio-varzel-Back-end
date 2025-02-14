import { Router } from "express";
import { createCarController } from "./modules/car/useCase/CreateCar/index";
import { listAllCarController } from "./modules/car/useCase/ListAllCar/index";
import { listByIdCarController } from "./modules/car/useCase/ListById/index";
import { deleteCarController } from "./modules/car/useCase/DeleteCar/index";
import { sendEmailController } from "./modules/car/useCase/SendEmail/index";
import { updateCarController } from "./modules/car/useCase/UpdateCar/index";

import {
  uploadImageCarController,
  uploadImageCarUseCase,
} from "./modules/car/useCase/UploadImageCar/index";

import { createUserController } from "./modules/user/useCase/RegisterNewUser/Index";
import { loginController } from "./modules/authentication/useCase/LoginUser/Index";

import { middlewareController } from "./modules/authentication/useCase/middlewares/Index";

const router = Router();

router.post(
  "/create/auto",
  middlewareController.handle,
  (request, response) => {
    return createCarController.handle(request, response);
  }
);

router.get("/list/auto", (request, response) => {
  return listAllCarController.handle(request, response);
});

router.get("/list/:id/auto", (request, response) => {
  return listByIdCarController.handle(request, response);
});

router.delete(
  "/delete/:id/auto",
  middlewareController.handle,
  (request, response) => {
    return deleteCarController.handle(request, response);
  }
);


router.post(
  "/sendEmail",
  middlewareController.handle,
  (request, response) => {
    return sendEmailController.handle(request, response);
  }
);

router.put(
  "/update/:id/auto",
  middlewareController.handle,
  (request, response) => {
    return updateCarController.handle(request, response);
  }
);

router.post("/register/user", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/upload/car/:id/image", (request, response) => {
  return uploadImageCarController.handle(request, response);
});

router.post("/login", (request, response) => {
  return loginController.handle(request, response);
});

export { router };
