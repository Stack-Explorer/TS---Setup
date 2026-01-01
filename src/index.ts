import { configDotenv } from "dotenv";
import { app } from "./app.js";
import connectDB from "./DB/connectDB.js";

configDotenv();

const PORT = process.env.PORT;
console.log(PORT);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is working on ${PORT}`);
        })
    })
    .catch((error) => {
        console.log('Failed to connect MongoDB :',error);
    })