import { Router } from "express";
import { CreateCategoryController } from "../usecases/Category/CreateCategory/CreateCategory.controller";
import { CreateCategoryService } from "../usecases/Category/CreateCategory/CreateCategory.service";

const categoryRouter = Router();

const createCategoryService = new CreateCategoryService();
const createCategoryController = new CreateCategoryController(createCategoryService);

categoryRouter.post("/create", createCategoryController.handle.bind(createCategoryController));

const categoryRoutes = { key: "/category", routes: categoryRouter };
export { categoryRoutes };
