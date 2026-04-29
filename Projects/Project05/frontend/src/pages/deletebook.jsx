import { useEffect, useState } from "react";
import axios from "axios";

function DeleteBook() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios.get("http://localhost:3000/books")
      .then(res => setBooks(res.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        alert("Deleted");
        getBooks();
      });
  };

  return (
    <div>
      <h2>Delete Books</h2>

      {books.map((b) => (
        <div key={b.id}>
          {b.title} 
          <button onClick={() => handleDelete(b.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DeleteBook;