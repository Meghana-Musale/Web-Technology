import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Book</Link> |{" "}
      <Link to="/delete">Delete Book</Link>
    </nav>
  );
}

export default Navbar;