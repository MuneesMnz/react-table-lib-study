import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductData from "./Components/ApiDataFetchingtable.jsx/ProductData";
import BasicTable from "./Components/BasicTable";
import ColumnHiding from "./Components/ColumnHiding";
import ColumnOrder from "./Components/ColumnOrder";
import FilteringTable from "./Components/FilteringTable";
import PaginationTable from "./Components/PaginationTable";
import RowSelection from "./Components/RowSelection";
import EmployeeTable from "./Components/Sample-Project-Table-1/EmployeeTable";
import ProductTable from "./Components/Sample-Project-Table-1/ProductTable";
import SortingTable from "./Components/SortingTable";
import StickyTable from "./Components/StickyTable";
import ProductInsert from "./Components/ApiDataFetchingtable.jsx/ProductInsert";

function App() {
  return (
    // <div className="flex gap-20">
    //   {/* <BasicTable /> */}
    //   {/* <SortingTable /> */}
    //   {/* <FilteringTable /> */}
    //   {/* <PaginationTable /> */}
    //   {/* <RowSelection /> */}
    //   {/* <ColumnOrder /> */}
    //   {/* <ColumnHiding /> */}
    //   {/* <StickyTable /> */}
    //   <ProductTable />
    //   <EmployeeTable />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductData />} />
        <Route path="/add" element={<ProductInsert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
