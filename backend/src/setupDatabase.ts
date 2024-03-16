import { Database } from "sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "db/quotes.db");

const db = new Database(dbPath, (err) => {
    if (err) {
        console.error("Could not open database", err);
        return;
    }
    console.log("Connected to SQLite database.");

    const createQuotesTableSql = `
    CREATE TABLE IF NOT EXISTS Quote (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL,
        author TEXT NOT NULL
    );`;

    db.run(createQuotesTableSql, (err) => {
        if (err) {
            console.error("Error creating quotes table", err);
            return;
        }
        console.log("Quotes table created or already exists.");

        db.close((err) => {
            if (err) {
                console.error("Error closing the database connection", err);
                return;
            }
            console.log("Database connection closed.");
        });
    });
});
