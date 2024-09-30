import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="mt-3">
        <h5>Basic CRUD</h5>
      </div>
      <div className="mt-4 bg-yellow-700 p-2 flex justify-end">
        <Link to="/" className="bg-yellow-200 rounded p-1">
          Home
        </Link>
        <Link to="/login" className="mx-5 bg-yellow-200 rounded p-1">
          Logout
        </Link>
      </div>
    </>
  );
}

export default Navbar;
