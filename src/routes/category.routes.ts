import { Request, Response, Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", (req: Request, res: Response) => {
	res.json({ message: "Rota de categorias" });
});

const categoryRoutes = { key: "/category", routes: categoryRouter };
export { categoryRoutes };
