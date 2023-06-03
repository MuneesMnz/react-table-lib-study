import React, { useMemo } from "react";
import { useTable, useGlobalFilter,useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./Columns";
import "./Table.css";
import GlobalFilter from "./GlobalFilter";
const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((header) => {
            return (
              <tr {...header.getHeaderGroupProps()}>
                {header.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      <div>
                      {column.render("Header")}
                    {
                        column.canFilter ? column.render('Filter') :null
                    }
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGrp) => {
            return (
              <tr {...footerGrp.getFooterGroupProps()}>
                {footerGrp.headers.map((columns) => (
                  <td {...columns.getFooterProps}>
                    {columns.render("Footer")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
};

export default FilteringTable;
