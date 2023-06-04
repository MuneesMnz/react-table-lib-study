import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    sticky: "left",
    // Filter: ColumnFilter
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "Firest Name",
    sticky: "left",
    // Filter: ColumnFilter,
    // disableFilters:true
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
    sticky: "left",
    // Filter: ColumnFilter,
  },
  // {
  //     Header:"Email",
  //     accessor:"email"
  // },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    

    // sortType: (rowA, rowB, coulmnId) => {
    //   const DateA = format(rowA.values[coulmnId], "YYYY-MM-DD", true);
    //   const DateB = format(rowB.values[coulmnId], "YYYY-MM-DD", true);
    //   if (!DateA.isValid() || DateB.isValid()) return 0;
    //   if (DateA.isBefore(DateB)) return -1;
    //   if (DateA.isAfter(DateB)) return 1;
    //   return 0;
    // },

    // sortType: 'datetime',
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "Gender",
    accessor: "gender",
    Footer: "Gender",
    
    // Filter: ColumnFilter,
  },
  {
    Header: "Age",
    accessor: "age",
    Footer: "Age",
    
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
    
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
    
    // Filter: ColumnFilter,
  },
];

export const Grouped_Columns = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "Firest Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Gender",
        accessor: "gender",
        Footer: "Gender",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
