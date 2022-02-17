/**
 * required external modules
 */
import * as dotenv from "dotenv";
import  express  from "express";
import cors from "cors";
import helmet from "helmet";
import { appendFile } from "fs";
import {itemsRouter} from "./items/items.router";

dotenv.config();



/**
 * app variables
 */

if(!process.env.PORT){
    process.exit(1);
}

const PORT : number= parseInt(process.env.PORT as string,10);
const app=express();


/**
 * app configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);

/**
 * server activation 
 */

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})