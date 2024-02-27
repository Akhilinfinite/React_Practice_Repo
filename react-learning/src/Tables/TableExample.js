import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useGroupBy,
} from "react-table";
import "./styles.css";

const TableExample = () => {
  // Sample data for the table
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i + 1,
        name: `Name ${i + 1}`,
        age: Math.floor(Math.random() * 30) + 20,
        country: `Country ${i % 5}`,
        city: `City ${i % 10}`,
      });
    }
    return data;
  };

  const data = useMemo(() => generateRandomData(), []);

  // React Table columns
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name", editable: true },
    { Header: "Age", accessor: "age", editable: true },
    { Header: "Country", accessor: "country", editable: true },
    { Header: "City", accessor: "city", editable: true },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    usePagination,
    useRowSelect
  );

  return (
    <div>
      <div>
        <label>
          Global Search:{" "}
          <input onChange={(e) => setGlobalFilter(e.target.value)} />
        </label>
      </div>
      <table {...getTableProps()} style={{ width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default TableExample;
