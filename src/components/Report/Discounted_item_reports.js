import React from 'react'
import { Box, OutlinedInput, TableCell, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TableComp from "../CustomComponents/TableComp";
import { StyledTableCell, StyledTableRow } from "../CustomComponents/TableCellAndRow";

const columns = [
  { id: "Date", label: "Date", minWidth: 80, align: "left" },
  { id: "Dishes", label: "Dishes", minWidth: 70, align: "left" },
  {
    id: "Quntity",
    label: "Quntity Added",
    minWidth: 100,
    align: "left",
  },
  {
    id: "sold",
    // label: "Size\u00a0(km\u00b2)",
    label: "Quantity Sold",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "avg",
    label: "Avg Discount Window",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "gross",
    label: "Gross Revenue",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  
];

function createData(id,no_of_item,
    price,
    discount,
    qty,
    amount,
    tax,
    total_amount,
    Commission,
    StoreProceeds,) {
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
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ),
  createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ),
  createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ), createData(
    "12/13/2020",
    "40",
    "1",
    "2",
    "5",
    "300",
  ),

];


const Discounted_item_reports = () => {
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
                  <StyledTableCell>{row.discount}</StyledTableCell>
                  <StyledTableCell>{row.qty}</StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableComp>
        </Box>
      </Box>
    </>
  )
}

export default Discounted_item_reports