import express, { urlencoded } from "express";
import mysql from "mysql";

import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use(urlencoded({ extended: true }));
const connectionDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "crud",
});

app.get("/books", (req, res) => {
  const q = "SELECT  * FROM book";

  connectionDb.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json(data);
  });
});

// Start the server and handle potential errors
app.listen(8000, (err) => {
  if (err) {
    console.error("Error starting the server:", err.message);
  } else {
    console.log("Server is running on port 8000");
  }
});
