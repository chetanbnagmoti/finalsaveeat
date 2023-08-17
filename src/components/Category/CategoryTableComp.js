import React from "react";
import TableComp from "../CustomComponents/TableComp";
import { StyledTableCell, StyledTableRow } from "../CustomComponents/TableCellAndRow";

const columns = [
  { id: "id", label: "Category Id ", minWidth: 150, align: "left" },
  { id: "name", label: "Name", minWidth: 50, align: "left" },
  {
    id: "C-Order",
    label: "Category Order",
    minWidth: 70,
    align: "left",
  },
  {
    id: "on-of-items",
    // label: "Size\u00a0(km\u00b2)",
    label: "No Of Items",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "created-on",
    label: "Created On",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "created-by",
    label: "Created By",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "window",
    // Size\u00a0(km\u00b2)
    label: "Window",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, name, order, itemCount, createdOn, createdBy, window) {
  return {
    id,
    name,
    order,
    itemCount,
    createdOn,
    createdBy,
    window,
  };
}

const rows = [
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
];
const CategoryTableComp = () => {
  return (
    <>
      <TableComp columns={columns}>
        {rows.map((row, ind) => {
          return (
            <StyledTableRow hover key={ind} role="checkbox" tabIndex={-1}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.order}</StyledTableCell>
              <StyledTableCell>{row.itemCount}</StyledTableCell>
              <StyledTableCell>{row.createdOn}</StyledTableCell>
              <StyledTableCell>{row.createdBy}</StyledTableCell>
              <StyledTableCell>{row.window}</StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableComp>
    </>
  );
};

export default CategoryTableComp;
