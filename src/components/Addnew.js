import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Addnew() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [empDate, setEmpDate] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function AddData(e) {
    e.preventDefault();
    const newData = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      name: name,
      job: job,
      date: empDate,
    };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    navigate("/showdata");
  }

  return (
    <div className="mt-10 border-4 border-yellow-300 p-4 bg-yellow-100">
      <h1 className="border-4 border-yellow-300 p-2">Add New Record</h1>
      <div className="mt-4">
        <form onSubmit={AddData}>
          <div className="mb-3 flex items-center">
            <label htmlFor="name" className="w-1/4">
              Name
            </label>
            <input
              type="text"
              className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 flex items-center">
            <label htmlFor="job" className="w-1/4">
              Job
            </label>
            <input
              type="text"
              className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div className="mb-3 flex items-center">
            <label htmlFor="employed" className="w-1/4">
              Employed On
            </label>
            <input
              type="date"
              className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
              id="employed"
              value={empDate}
              onChange={(e) => setEmpDate(e.target.value)}
            />
          </div>
          <button type="submit" className="rounded bg-yellow-300 p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addnew;
