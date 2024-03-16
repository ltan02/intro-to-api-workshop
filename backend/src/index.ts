import express, { Request, Response } from "express";
import cors from "cors";
import { Database } from "sqlite3";
import path from "path";
import { Quote, QuoteRequestParams } from "./types";

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

app.post("/quotes", (req: Request<Quote>, res: Response) => {
    const { id, content, author } = req.body;
    if (!id || !content || !author) {
        return res.status(400).send("Missing fields");
    }

    const sql = `INSERT INTO Quote (id, content, author) VALUES (?, ?, ?)`;
    db.run(sql, [id, content, author], function (err) {
        if (err) {
            return res.status(500).send("Failed to save the quote with error: " + err.message);
        }
        res.status(201).send({ id, content, author });
    });
});

app.get("/quotes/random", (req: Request, res: Response) => {
    const sql = "SELECT * FROM Quote ORDER BY RANDOM() LIMIT 1";
    db.get(sql, (err, row) => {
        if (err) {
            return res.status(500).send("Failed to fetch a random quote with error: " + err.message);
        }
        if (row) {
            res.send(row as Quote);
        } else {
            res.status(204).send("No quotes saved");
        }
    });
});

app.delete("/quotes/:id", (req: Request<QuoteRequestParams>, res: Response) => {
    const { id } = req.params;
    const sql = "DELETE FROM quotes WHERE id = ?";
    db.run(sql, id, function (err) {
        if (err) {
            return res.status(500).send("Failed to delete the quote with error: " + err.message);
        }
        if (this.changes > 0) {
            res.send("Quote deleted successfully");
        } else {
            res.status(404).send("Quote not found");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
