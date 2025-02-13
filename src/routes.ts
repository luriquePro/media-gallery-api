import express from "express";
import { AppRoutes } from "./routes/index";

const globalRoutes = express();

AppRoutes.forEach(route => globalRoutes.use(route.key, route.routes));

globalRoutes.use("*", (req, res) => {
	res.json({ message: "Rota NotFoundError" });
});

export { globalRoutes };
