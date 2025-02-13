import { Request, Response, Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", async (req: Request, res: Response) => {
	res.json({ message: "Rota de categorias" });
});

const categoryRoutes = { key: "/category", routes: categoryRouter };
export { categoryRoutes };
