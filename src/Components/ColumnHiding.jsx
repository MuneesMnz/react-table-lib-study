import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./Columns";
import "./Table.css";
import { CheckBox } from "./CheckBox";
const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps
  } = tableInstance;
  return (
   <>
   <div>
    <div>
        <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
    </div>
    {
        allColumns.map(column=>(
            <div key={column.id}>
             <label >
                <input type='checkbox' {...column.getToggleHiddenProps()} />
                {column.Header}
             </label>

            </div>
        ))
    }
   </div>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
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
                <td {...columns.getFooterProps}>{columns.render("Footer")}</td>
              ))}
            </tr>
          );
        })}
      </tfoot>
    </table>
   </>
  );
};

export default ColumnHiding;
