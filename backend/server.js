import express from "express";
import dotenv from "dotenv";
import{connectDB} from './config/db.js';
import deliveryRoutes from "./routes/delivery.route.js";
import cors from "cors";


dotenv.config();
const app = express();
app.use(cors());


app.use(express.json()); //allow us to accept JSon dat in the req.body
app.use("/api/deliveries",deliveryRoutes);

app.listen(5000,()=> {
    connectDB();
    console.log('Server started at http://localhost:5000 ');
});
