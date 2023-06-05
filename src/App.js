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

function App() {
  return (
    <div className="flex gap-20">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}
      <ProductTable />
      <EmployeeTable />
    </div>
  );
}

export default App;
