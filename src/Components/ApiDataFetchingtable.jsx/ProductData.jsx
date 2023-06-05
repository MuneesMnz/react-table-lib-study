import React, { useEffect, useState } from "react";
import TableOne from "../Sample-Project-Table-1/TableOne";
import axios from "axios";

const ProductData = () => {
  const Column = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Product Name",
      accessor: "productName",
    },
    {
      Header: "Catogory",
      accessor: "category",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Quatity",
      accessor: "quantity",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => {
        return (
          <div className="flex items-center gap-5">
            <button
              onClick={() => console.log("edit")}
              className="text-[blue] bg-[#0000ff20] font-semibold px-2 py-[1px] cursor-pointer rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handledelete(row.original.id)}
              className="text-[red] bg-[#ff000021]  font-semibold px-2 py-[1px] cursor-pointer rounded"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [refresh, setrefresh] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        setData(res.data);
        setIsFinished(true);
      } catch (err) {
        console.log(err);
        setIsFinished(false);
      }
    };
    fetchData();

  }, [refresh]);

  const handledelete = (id) => {
    axios
      .delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        console.log(res);
        // setData((prevData) => prevData.filter((item) => item.id !== id));
        setrefresh(prev=>!prev)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-2xl text-center my-6 ">Product Table </h1>
      <div className="w-full h-full  box-border p-5 bg-whte">
        {isFinished ? (
          <TableOne Columns={Column} Data={data} refresh={refresh} />
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
};

export default ProductData;
