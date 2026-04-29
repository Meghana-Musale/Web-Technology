import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EditBook() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState(state);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/books/${id}`, form)
      .then(() => {
        alert("Updated!");
        navigate("/");
      });
  };

  return (
    <div>
      <h2>Edit Book</h2>

      <input name="title" value={form.title} onChange={handleChange} />
      <input name="author" value={form.author} onChange={handleChange} />
      <input name="genre" value={form.genre} onChange={handleChange} />
      <input name="availability" value={form.availability} onChange={handleChange} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditBook;