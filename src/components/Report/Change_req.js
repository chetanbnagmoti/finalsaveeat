import React from "react";
import { Box, OutlinedInput, TableCell, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TableComp from "../CustomComponents/TableComp";
import { StyledTableCell, StyledTableRow } from "../CustomComponents/TableCellAndRow";

const columns = [
  {
    id: "change",
    label: "Change Request",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  id,
  no_of_item,
  price,
  discount,
  qty,
  amount,
  tax,
  total_amount,
  Commission,
  StoreProceeds
) {
  return {
    id,
    no_of_item,
    price,
    discount,
    qty,
    amount,
    tax,
    total_amount,
    Commission,
    StoreProceeds,
  };
}

const rows = [
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
  createData("", "", "", "", "", ""),
];

const Change_req = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Total Records = 50</Typography>
          </Box>
          <Box>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              Download as <DownloadOutlinedIcon />
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 1 }}>
          <TableComp columns={columns}>
            {columns.map((cur, ind) => {
              return (
                <TableCell
                  style={{ minWidth: 80, margin: "0px", padding: "5px" }}
                >
                  <OutlinedInput
                    sx={{ height: 38, m: 0, p: 0 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Enter ID"
                    aria-describedby="outlined-weight-helper-text"
                  />
                </TableCell>
              );
            })}

            {rows.map((row, ind) => {
              return (
                <StyledTableRow hover key={ind} role="checkbox" tabIndex={-1}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.no_of_item}</StyledTableCell>
                  <StyledTableCell>{row.price}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableComp>
        </Box>
      </Box>
    </>
  );
};

export default Change_req;
