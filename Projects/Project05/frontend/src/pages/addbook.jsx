import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    availability: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3000/books", form)
      .then(() => alert("Book Added"));
  };

  return (
    <div>
      <h2>Add Book</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="genre" placeholder="Genre" onChange={handleChange} />
      <input name="availability" placeholder="Availability" onChange={handleChange} />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddBook;