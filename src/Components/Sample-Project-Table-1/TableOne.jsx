import React, { useEffect, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";

const TableOne = ({ Columns, Data,refresh }) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);

  useEffect(()=>{
    console.log(data);
  },[refresh])

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

  const { globalFilter, pageIndex, pageSize } = state;
  const BelowBorder = {
    width: "full",
    borderBottom: "1px solid #e0e0e0",
  };
  const getPageButtons = () => {
    const currentPageIndex = pageIndex;
    const totalPages = pageOptions.length;

    const maxPageButtonsToShow = 4; // Maximum number of page buttons to show

    let startPage = 0;
    let endPage = totalPages - 1;

    if (totalPages > maxPageButtonsToShow) {
      const halfMaxButtons = Math.floor(maxPageButtonsToShow / 2);

      if (currentPageIndex <= halfMaxButtons) {
        endPage = maxPageButtonsToShow - 1;
      } else if (currentPageIndex >= totalPages - 1 - halfMaxButtons) {
        startPage = totalPages - maxPageButtonsToShow;
      } else {
        startPage = currentPageIndex - halfMaxButtons;
        endPage = currentPageIndex + halfMaxButtons;
      }
    }

    const pageButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          className={i === currentPageIndex ? "text-red-500" : ""}
        >
          {i + 1}
        </button>
      );
    }

    return pageButtons;
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
          {pageOptions.map((value) => {
            return (
              <button
                key={value}
                className="p-2"
                onClick={() => gotoPage(value)}
              >
                {value + 1}{" "}
              </button>
            );
          })}
        </span>
        <span>
          | Go to page :{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pagesize) => {
            return (
              <option key={pagesize} value={pagesize}>
                {pagesize}
              </option>
            );
          })}
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
        <div>{getPageButtons()}</div>
      </div>
    </div>
  );
};

export default TableOne;
