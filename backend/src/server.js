import express from "express";
import router from "./routes/route.js";

const app = express();
const port = 4000;


/**
 * URL API
 */
app.use("/api/v1", router);

/**
 * Server
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});