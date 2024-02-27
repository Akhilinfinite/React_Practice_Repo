import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LazyLoadingGrid = () => {
  const PAGE_SIZE = 10;
  const INITIAL_ROWS = 50;
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Load initial data after 1 second
    setTimeout(() => {
      setLoading(false);
      setRowData(generateData(currentPage, PAGE_SIZE));
    }, 1000);
  }, []);

  const generateData = (page, pageSize) => {
    const data = [];
    const start = (page - 1) * pageSize + 1;
    const end = start + pageSize - 1;
    for (let i = start; i <= end; i++) {
      data.push({
        id: i,
        name: `Name ${i}`,
        age: Math.floor(Math.random() * 30) + 20,
        country: `Country ${i % 5}`,
        city: `City ${(i + 1) % 10}`,
      });
    }
    return data;
  };

  const loadMoreData = () => {
    setLoading(true);
    setCurrentPage((prevPage) => prevPage + 1);
    // Simulate a delay before loading more data
    setTimeout(() => {
      setRowData((prevData) => [...prevData, ...generateData(currentPage, PAGE_SIZE)]);
      setLoading(false);
    }, 1000);
  };

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const onPaginationChanged = (params) => {
    const currentPage = params.api.paginationGetCurrentPage();
    const totalPages = params.api.paginationGetTotalPages();

    if (currentPage < totalPages - 1 && !loading) {
      const lastRow = params.api.paginationGetPageSize() * (currentPage + 1);
      if (params.api.paginationGetRowCount() < lastRow + PAGE_SIZE) {
        // Load more data when approaching the end of the current set of rows
        loadMoreData();
      }
    }
  };

  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Age", field: "age", sortable: true, filter: true },
    { headerName: "Country", field: "country", sortable: true, filter: true },
    { headerName: "City", field: "city", sortable: true, filter: true },
  ];

  const gridOptions = {
    pagination: true,
    paginationPageSize: 10,
    paginationGetPageSize:[10,20,50,100],
    suppressCellSelection: true,
    onPaginationChanged: onPaginationChanged,
  };

  const overlayLoadingTemplate = "<span class='ag-overlay-loading-center'>Loading...</span>";

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        gridOptions={gridOptions}
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight"
        onGridReady={onGridReady}
        overlayLoadingTemplate={overlayLoadingTemplate}
      />
    </div>
  );
};

export default LazyLoadingGrid;
