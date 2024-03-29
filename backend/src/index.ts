import express, { Request, Response } from "express";
import cors from "cors";
import { Database } from "sqlite3";
import path from "path";

const app = express();
app.use(cors());
const PORT = 8000;

// Initialize database connection
const dbPath = path.resolve(__dirname, "db/quotes.db");

const db = new Database(dbPath, (err) => {
    if (err) console.error("Open error: ", err.message);
    else console.log("Successful connection to the database");
});

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from the backend!");
});

app.post("/quotes", (req: Request, res: Response) => {
    res.status(501).send("Not implemented");
});

app.get("/quotes/random", (req: Request, res: Response) => {
    res.status(501).send("Not implemented");
});

app.delete("/quotes/:id", (req: Request, res: Response) => {
    res.status(501).send("Not implemented");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
