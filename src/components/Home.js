import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="mt-10 grid ">
      <h1 className="">WELCOME</h1>
      <div className="mt-4 grid-cols-12">
        <Link to="/showdata" className="text-blue-500 underline">
          {" "}
          Show All data
        </Link>
      </div>
      <div className="mt-4 grid-cols-12">
        <Link to="/addrecord" className="text-blue-500 underline">
          {" "}
          Add new Record
        </Link>
      </div>
    </div>
  );
}

export default Home;
