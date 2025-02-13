import { Request, Response, Router } from "express";
import { CustomError } from "../shared/ErrorApi";

const categoryRouter = Router();

categoryRouter.get("/", async (req: Request, res: Response) => {
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new CustomError({ message: "Erro ao buscar categorias", logged: false }));
		});
	});

	res.json({ message: "Rota de categorias" });
});

const categoryRoutes = { key: "/category", routes: categoryRouter };
export { categoryRoutes };
