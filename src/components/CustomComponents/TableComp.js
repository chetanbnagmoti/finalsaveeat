import React from "react";
import {
  Box,
  Typography,
  TableHead,
  TableContainer,
  TableBody,
  Table,
} from "@mui/material";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import { StyledTableCell, StyledTableRow } from "./TableCellAndRow";

const TableComp = ({ columns, children }) => {
  return (
    <>
      <Box>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table>
            <TableHead>
              <StyledTableRow>
                {columns?.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, border: "1px solid" }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          color: "black",
                          fontSize: "13.5px",
                        }}
                      >
                        {column.label}
                      </Typography>

                      <UnfoldMoreOutlinedIcon
                        sx={{
                          color: "black",
                          fontSize: "18px",
                          margin:"0px 5px"
                        }}
                      />
                    </Box>
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableComp;
