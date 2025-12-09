import express from "express";
import validateRoutes from "./routes/validateRoutes.js";

const app = express();

app.use(express.json());

// All validate endpoints
app.use("/validate", validateRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
