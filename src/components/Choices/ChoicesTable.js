import React from "react";
import TableComp from "../CustomComponents/TableComp";
import { StyledTableRow, StyledTableCell } from "../CustomComponents/TableCellAndRow";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const columns = [
  { id: "id", label: "Choice ID", minWidth: 150, align: "left" },
  { id: "name", label: "Choice Name", minWidth: 50, align: "left" },
  {
    id: "options",
    label: "Choice Options",
    minWidth: 70,
    align: "left",
  },
  {
    id: "no-of",
    label: "No of Items",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "created",
    label: "Created On ",
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
    id: "action",
    label: "Action",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, name, choices, noOfITem, createdOn, createdBy) {
  return {
    id,
    name,
    choices,
    noOfITem,
    createdOn,
    createdBy,
  };
}

const rows = [
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
  createData("AB12345", "Rice", "10", "90", "09/12/2023", "Sneh"),
];

const ChoicesTable = () => {
  return (
    <>
      <TableComp columns={columns}>
        {rows.map((row, ind) => {
          return (
            <StyledTableRow hover key={ind} role="checkbox" tabIndex={-1}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.choices}</StyledTableCell>
              <StyledTableCell>{row.noOfITem}</StyledTableCell>
              <StyledTableCell>{row.createdOn}</StyledTableCell>
              <StyledTableCell>{row.createdBy}</StyledTableCell>
              <StyledTableCell>
                {" "}
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableComp>
    </>
  );
};

export default ChoicesTable;
