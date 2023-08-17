import React from "react";
import TableComp from "../CustomComponents/TableComp";
import {
  StyledTableCell,
  StyledTableRow,
} from "../CustomComponents/TableCellAndRow";
import { Box, Divider, Typography } from "@mui/material";

const columns = [
  {
    id: "item_name",
    label: "Item Name",
    minWidth: 70,
    align: "left",
  },
  {
    id: "Qty",
    // label: "Size\u00a0(km\u00b2)",
    label: "Quantity",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Full Price ",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "discount",
    label: "Discount Price ",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, Qty, price, disPrice) {
  return {
    name,
    Qty,
    price,
    disPrice,
  };
}

const rows = [
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
  createData("Biryani Rice", "10", "100", "70"),
];

const TextLabel = {
  fontSize: "11px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "30px",
  backgroundColor: "#85D8D9",
  alignItems: "center",
  color: "white",
  fontWeight: "500",
  lineHeight: "10px",
  fontFamily: "Poppins",
};
const GroupedItemsDisTable = () => {
  return (
    <>
      <TableComp columns={columns}>
        {rows.map((row, ind) => {
          return (
            <StyledTableRow hover key={ind} role="checkbox" tabIndex={-1}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{
                      width: "50%",
                      display: "flex",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                        5
                      </Typography>
                      <Box sx={TextLabel}>On Discount</Box>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{ width: "100%" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                        5
                      </Typography>
                      <Box sx={TextLabel}>Left</Box>
                    </Box>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.disPrice}</StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableComp>
    </>
  );
};

export default GroupedItemsDisTable;
