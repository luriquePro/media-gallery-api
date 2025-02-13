import moment from "moment";
import { ApplicationAPI } from "./app.js";

const PORT = Number(process.env.PORT);
const app = new ApplicationAPI();

const cb = () => {
	console.log(`Servidor iniciado. \nRodando na porta: ${process.env.PORT}. \nData: ${moment().format("DD/MM/YY HH:MM:SS")}.`);
};

app.listen(PORT, cb);
