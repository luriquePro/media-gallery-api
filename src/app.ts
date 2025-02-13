import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { globalRoutes } from "./routes";

class ApplicationAPI {
	private express: express.Application;

	constructor() {
		this.express = express();
		this.configureApp();
	}

	private configureApp() {
		// Adicionar acesso a arquivos estaticos
		this.express.use("/public", express.static(__dirname + "public"));

		// Configuração de Cors
		this.express.use(cors());

		// Configuração de JSON
		this.express.use(express.json());

		// Remover X-Powered-By
		this.express.disable("x-powered-by");

		// Configurar o Banco
		mongoose
			.connect(process.env.MONGO_URL!, { dbName: process.env.MONGO_DB_NAME })
			.then(() => console.log("Conectado ao banco de dados."))
			.catch(() => console.log("Erro ao conectar ao banco de dados."));

		// Configurar Rotas
		this.express.use(globalRoutes);

		// Middleware de Erros
	}

	public listen(port: number, cb?: () => void) {
		return this.express.listen(port, cb);
	}
}

export { ApplicationAPI };
