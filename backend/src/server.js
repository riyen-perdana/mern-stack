import express from "express";
import router from "./routes/route.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(rateLimiter);
  
// Initial Route Dengan api/v1
app.use("/api/v1", router);
  
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});