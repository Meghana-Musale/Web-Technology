const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", 
  database: "librarydb"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed ", err);
  } else {
    console.log("DB connected ");
  }
});

// 🧪 Test route
app.get("/", (req, res) => {
  res.send("Backend is working ");
});

// 📚 GET all books
app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// ➕ ADD book
app.post("/books", (req, res) => {
  const { title, author, genre, availability } = req.body;

  db.query(
    "INSERT INTO books (title, author, genre, availability) VALUES (?, ?, ?, ?)",
    [title, author, genre, availability],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// ✏️ UPDATE book
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, genre, availability } = req.body;

  db.query(
    "UPDATE books SET title=?, author=?, genre=?, availability=? WHERE id=?",
    [title, author, genre, availability, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// ❌ DELETE book
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM books WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🚀 Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000 🚀");
});