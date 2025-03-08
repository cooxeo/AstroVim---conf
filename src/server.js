import express from "express";
import userRoutes from "../src/routes/userRoutes.js";
import dynamicRoutes from "./routes/dynamicRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/users", dynamicRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
