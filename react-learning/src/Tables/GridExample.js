import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./GridExample.css";
import { Col, Row, Form } from "react-bootstrap";

const GridExample = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setdata] = useState({});
  const [TempEditData, setTempEditData] = useState({});

  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 1,
        name: `Name ${i + 1}`,
        age: Math.floor(Math.random() * 30) + 20,
        country: `Country ${i % 5}`,
        city: `City ${(i + 1) % 10}`,
        editable: false,
        additional1: `Address line1 ${i + 1}`,
        additional2: `Address line2 ${i + 1}`,
        additional3: `Address line3 ${i + 1}`,
      });
    }
    return data;
  };
  const [rowData, setRowData] = useState(generateRandomData());
  const [Tempdata, setTempdata] = useState(generateRandomData());

  const ActionCellRenderer = ({ data }) => {
    return (
      <div>
        <Button className="mx-2 py-0" onClick={() => handleEdit(data)}>
          Edit
        </Button>
        <Button
          variant="danger"
          className="mx-2 py-0"
          onClick={() => handleDelete(data)}
        >
          Delete
        </Button>
      </div>
    );
  };

  const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      sortable: true,
      filter: true,
      editable: false,
      pinned: "left",
      maxWidth: 100,
    },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Age",
      field: "age",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Country",
      field: "country",
      sortable: true,
      filter: true,
    },
    {
      headerName: "City",
      field: "city",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Additional1",
      field: "additional1",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Additional2",
      field: "additional2",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Additional3",
      field: "additional3",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Actions",
      cellRenderer: ActionCellRenderer,
      pinned: "right",
    },
  ];

  const gridOptions = {
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10, 15, 20, 30, 50],
    defaultColDef: {
      sortable: true,
      filter: true,
    },
    suppressRowClickSelection: true,
    rowSelection: "single",
    suppressDragLeaveHidesColumns: false,
  };
  const handleEdit = (data) => {
    setdata(data);
    setTempEditData(data);
    setModalShow(true);
  };
  const onClear = () => {
    setdata(TempEditData);
  };
  const updatedData = (name) => {
    console.log(name);
    const newdata = rowData.map((e) =>
      e.id === name.id ? { ...name, age: Number(name.age) } : e
    );
    setRowData(newdata);
    setTempdata(newdata);
    setModalShow(false);
  };
  const handleSearch = (value) => {
    const newdata = Tempdata.filter((e) => {
      return (
        e.name.toLowerCase().includes(value.toLowerCase()) ||
        e.city.toLowerCase().includes(value.toLowerCase())
      );
    });
    setRowData(newdata);
  };

  const handleDelete = (data) => {
    const newdata = rowData.filter((e) => e.id !== data.id);
    setRowData(newdata);
    setTempdata(newdata);
  };
  return (
    <div className="ag-theme-alpine" style={{ height: "535px", width: "100%" }}>
      <div className=" d-flex justify-content-end py-2">
        <Form.Group className="w-25 mx-3">
          <Form.Control
            type="text"
            name="search"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Here ..."
          />
        </Form.Group>
      </div>
      <AgGridReact
        gridOptions={gridOptions}
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="normal"
        height="80%"
        suppressCellSelection={true}
      />
      {modalShow && (
        <>
          <TableEU
            data={data}
            setdata={setdata}
            modalShow={modalShow}
            setModalShow={setModalShow}
            updatedData={updatedData}
            onClear={onClear}
          />
        </>
      )}
    </div>
  );
};

export default GridExample;

const TableEU = ({
  data,
  setdata,
  updatedData,
  setModalShow,
  modalShow,
  onClear,
}) => {
  return (
    <Modal
      show={modalShow}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        marginTop: "20px",
      }}
    >
      <Modal.Header closeButton onClick={() => setModalShow(false)}>
        Edit Row ID {data.id}
      </Modal.Header>
      <Modal.Body style={{ padding: "5px", margin: "30px" }}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={data.name}
                name="name"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>age</Form.Label>
              <Form.Control
                type="text"
                value={data.age}
                name="age"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>country</Form.Label>
              <Form.Control
                type="text"
                value={data.country}
                name="country"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={data.city}
                name="city"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Additional1</Form.Label>
              <Form.Control
                type="text"
                value={data.additional1}
                name="additional1"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Additional2</Form.Label>
              <Form.Control
                type="text"
                value={data.additional2}
                name="additional2"
                onChange={(e) => {
                  setdata({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Additional3</Form.Label>
          <Form.Control
            type="text"
            value={data.additional3}
            name="additional3"
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </Form.Group>
        <div className="border-top mt-4 mb-4"></div>
        <Row>
          <Col>
            <Button
              className="btn-padding"
              variant="secondary"
              onClick={() => {
                updatedData(data);
              }}
            >
              update
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="btn-padding btn-icon"
              variant="primary"
              onClick={() => onClear()}
            >
              clear
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
