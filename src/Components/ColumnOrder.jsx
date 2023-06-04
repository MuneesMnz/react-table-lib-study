import React, { useMemo } from "react";
import { useTable, useColumnOrder } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./Columns";
import "./Table.css";
const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = tableInstance;

  const changeOrder = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "age",
      "date_of_birth",
      "gender",

      "country",
      "phone",
    ]);
  };
  return (
    <>
      <button onClick={changeOrder}>Change Order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((header) => {
            return (
              <tr {...header.getHeaderGroupProps()}>
                {header.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
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

export default ColumnOrder;
