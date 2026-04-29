import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const getBooks = () => {
    axios.get("http://localhost:3000/books")
      .then(res => setBooks(res.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h2>📚 Book List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Availability</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.genre}</td>
              <td>{b.availability}</td>
              <td>
                <button onClick={() => navigate(`/edit/${b.id}`, { state: b })}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;