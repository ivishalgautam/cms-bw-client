import { useTable } from "react-table";
// import "react-table/react-table.css";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const ClientTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const resp = await axios.get("http://localhost:4000/api/client");
        setData(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, []);

  const columns = useMemo(() => [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Project Name", accessor: "projectName" },
    { Header: "Project Start Date", accessor: "projectStartDate" },
    { Header: "Project Delivery Date", accessor: "projectDeliveryDate" },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <table
        {...getTableProps()}
        className="react-table w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12"
      >
        <thead>
          {headerGroups?.map((headerGroup) => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <th {...column?.getHeaderProps()}>
                  {column?.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row?.getRowProps()}>
                {row?.cells?.map((cell) => (
                  <td {...cell?.getCellProps()}>{cell?.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ClientTable;
