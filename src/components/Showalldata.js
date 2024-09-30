import React, { useState, useEffect } from "react";
import Table from "./Table";

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Job", accessor: "job" },
  { Header: "Employed", accessor: "date" },
];

function Showalldata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // const handleUpdate = (index) => {
  //   console.log("Update record at index:", index);
  //   // Add your update logic here
  // };

  const handleDelete = (index) => {
    if (!confirm("Are you sure ?")) {
      return;
    } else {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
      localStorage.setItem("data", JSON.stringify(updatedData));
      console.log("Deleted record at index:", index);
    }
  };

  return <Table columns={columns} data={data} onDelete={handleDelete} />;
}
export default Showalldata;
