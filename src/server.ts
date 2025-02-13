import moment from "moment";
import { ApplicationAPI } from "./app.js";

new ApplicationAPI().listen(Number(process.env.PORT), () =>
	console.log(`Servidor iniciado. \nRodando na porta: ${process.env.PORT}. \nData: ${moment().format("DD/MM/YY HH:MM:SS")}.`),
);
