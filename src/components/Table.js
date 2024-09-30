// Table.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ columns, data, onDelete }) => {
  const navigate = useNavigate();

  function onUpdate(rowIndex) {
    navigate("/updaterecord", { state: { id: rowIndex } });
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 border-b border-gray-200 text-center text-gray-600"
              >
                {column.Header}
              </th>
            ))}
            <th className="py-2 px-4 border-b border-gray-200 text-center text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                  {row[column.accessor]}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                <button
                  className="mr-2 text-blue-500"
                  onClick={() => onUpdate(rowIndex)}
                >
                  Update
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(rowIndex)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
