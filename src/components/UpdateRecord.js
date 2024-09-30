import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateRecord() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [empDate, setEmpDate] = useState("");
  const location = useLocation();
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      console.log(parsedData);

      if (location.state) {
        const { id } = location.state;
        const dataRow = parsedData[id];
        if (dataRow) {
          setName(dataRow.name);
          setJob(dataRow.job);
          setEmpDate(dataRow.date);
          setId(dataRow.id);
        }
      }
    }
  }, [location.state]);

  const updateData = (e) => {
    e.preventDefault();
    let data = localStorage.getItem("data");
    let parsedData = data ? JSON.parse(data) : [];
    parsedData = parsedData.map((item) =>
      item.id === id
        ? {
            ...item,
            name: name,
            job: job,
            date: empDate,
          }
        : item
    );
    localStorage.setItem("data", JSON.stringify(parsedData));
    navigate("/showdata");
  };

  return (
    <div className="mt-10 border-4 border-yellow-300 p-4 bg-yellow-100">
      <h1 className="border-4 border-yellow-300 p-2">Update Record</h1>
      <div className="mt-4">
        <form onSubmit={updateData}>
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

export default UpdateRecord;
