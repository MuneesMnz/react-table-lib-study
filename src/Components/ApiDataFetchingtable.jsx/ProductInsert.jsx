import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductInsert = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
  });
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/product",product)
      .then((res) => {
        console.log(res.data);
        setProduct({
          productName: "",
          price: "",
          description: "",
          quantity: "",
          category: "",
        });
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form className="flex flex-col gap-5 w-[400px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={product.productName}
          name="productName"
          onChange={handleChange}
          className="outline-none border px-2 py-1 border-gray-600"
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          name="price"
          onChange={handleChange}
          className="outline-none border px-2 py-1 border-gray-600"
        />
        <input
          type="text"
          placeholder="description"
          value={product.description}
          name="description"
          onChange={handleChange}
          className="outline-none border px-2 py-1 border-gray-600"
        />
        <input
          type="number"
          placeholder="quantity"
          value={product.quantity}
          name="quantity"
          onChange={handleChange}
          className="outline-none border px-2 py-1 border-gray-600"
        />
        <input
          type="text"
          placeholder="category"
          value={product.category}
          name="category"
          onChange={handleChange}
          className="outline-none border px-2 py-1 border-gray-600"
        />
        <button type="submit" className="text-2xl text-red-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductInsert;
