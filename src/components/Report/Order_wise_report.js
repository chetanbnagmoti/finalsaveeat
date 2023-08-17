import { Box, OutlinedInput, TableCell, Typography } from "@mui/material";
import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TableComp from "../CustomComponents/TableComp";
import { StyledTableCell, StyledTableRow } from "../CustomComponents/TableCellAndRow";

const columns = [
  { id: "id", label: "Order Id ", minWidth: 80, align: "left" },
  { id: "items", label: "No Of Items", minWidth: 70, align: "left" },
  {
    id: "price",
    label: "Full Price",
    minWidth: 100,
    align: "left",
  },
  {
    id: "discount",
    // label: "Size\u00a0(km\u00b2)",
    label: "Discount",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "tax",
    // Size\u00a0(km\u00b2)
    label: "Tax",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "total",
    // Size\u00a0(km\u00b2)
    label: "Total Amount",
    minWidth: 80,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Inc Tax",
    label: "Commission (Inc Taxes)",
    minWidth: 80,
    align: "left",
  },
  {
    id: "Store-Proceeds",
    label: "Store Proceeds",
    minWidth: 70,
    align: "left",
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
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
  createData(
    "OD1234",
    "2",
    "101.23",
    "200",
    "5",
    "300",
    "50",
    "2000",
    "23",
    "23"
  ),
];

const Order_wise_report = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Total Records = 100</Typography>
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
                  <StyledTableCell>{row.discount}</StyledTableCell>
                  <StyledTableCell>{row.qty}</StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.tax}</StyledTableCell>
                  <StyledTableCell>{row.total_amount}</StyledTableCell>
                  <StyledTableCell>{row.Commission}</StyledTableCell>
                  <StyledTableCell>{row.StoreProceeds}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableComp>
        </Box>
      </Box>
    </>
  );
};

export default Order_wise_report;
