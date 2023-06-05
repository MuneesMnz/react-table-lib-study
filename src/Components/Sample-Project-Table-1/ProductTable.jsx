import React from "react";
import TableOne from "./TableOne";
import PRODUCT_DATA from "../PRODUCT_DATA.json";

const ProductTable = () => {
  const Column = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Product Name",
      accessor: "product_name",
    },
    {
      Header: "Company Name",
      accessor: "company_Name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
  ];

  return (
    <div className="flex-1 h-full bg-slate-400 ">
      <h1 className="text-2xl text-center my-6 ">Product Table </h1>
      <div className="w-full h-full  box-border p-5 bg-whte">
        <TableOne Columns={Column} Data={PRODUCT_DATA} />
      </div>
    </div>
  );
};

export default ProductTable;
