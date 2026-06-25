import express from "express";
import router from "./routes/route.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;
connectDb();

// Middleware
app.use(express.json());

// Initial Route Dengan api/v1
app.use("/api/v1", router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
