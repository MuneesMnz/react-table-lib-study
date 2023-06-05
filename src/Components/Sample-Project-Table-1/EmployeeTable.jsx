import React from "react";
import TableOne from "./TableOne";
import EMPLOYEE_DATA from "../EMPLOYEE_DATA.json";

const EmployeeTable = () => {
  const Column = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ];
  return (
    <div className="flex-1 h-full bg-slate-400">
      <h1 className="text-2xl text-center my-6 ">Employee Table </h1>
      <div className="w-full h-full  box-border p-5 bg-whte">
        <TableOne Columns={Column} Data={EMPLOYEE_DATA} />
      </div>
    </div>
  );
};

export default EmployeeTable;
