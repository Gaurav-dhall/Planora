import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
dotenv.config();




const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use(express.urlencoded({ extended: true }));

app.use("/api/test",testRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});