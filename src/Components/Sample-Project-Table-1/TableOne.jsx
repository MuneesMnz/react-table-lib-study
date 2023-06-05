import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";

const TableOne = ({ Columns, Data }) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);

  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    state,
    setGlobalFilter,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    canPreviousPage,
    setPageSize,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex ,pageSize} = state;
  const BelowBorder = {
    width: "full",
    borderBottom: "1px solid #e0e0e0",
  };
  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        className="w-full text-left shadow mt-2 rounded bg-white"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((header) => {
            return (
              <tr {...header.getHeaderGroupProps()} style={BelowBorder}>
                {header.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-5 py-3 hover:bg-gray-200 text-[15px] font-semibold"
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : "🔼"
                          : ""}
                      </span>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={BelowBorder}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-5 py-3 text-[15px] "
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}{" "}
          </strong>
        </span>
        <span>
           | Go to page : {" "}
           <input type="number" defaultValue={pageIndex+1} onChange={(e)=>{
            const pageNumber=e.target.value  ? Number(e.target.value)-1 :0
            gotoPage(pageNumber)
           }} style={{width:'50px'}} />
        </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))} >

          {
            [10,25,50].map(pagesize=>{
              return(
                <option key={pagesize} value={pagesize}>
                    {pagesize}
                </option>
              )
            })
          }
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default TableOne;
