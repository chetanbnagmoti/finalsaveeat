import React, { useState } from "react";
import { Box, IconButton, OutlinedInput, TableCell } from "@mui/material";
import Top_section from "./Top_section";
import TableComp from "../CustomComponents/TableComp";
import {
  StyledTableCell,
  StyledTableRow,
} from "../CustomComponents/TableCellAndRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuList from "../CustomComponents/MenuList";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DeleteMenuMadal from "../CustomComponents/DeleteMenuMadal";
import EditDiscount from "./Modals/EditDiscount";

const columns = [
  { id: "name", label: "Item Name", minWidth: 80, align: "left" },
  {
    id: "Qty",
    label: "Quantity",
    minWidth: 80,
    align: "left",
  },

  {
    id: "timer",
    label: "Timer",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "expire",
    label: "Expiry Date/Time",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "dicount",
    label: "Discount %",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "price",
    label: "Full Price",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "dicount-price",
    label: "Discount Price",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Action",
    label: "Action",
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
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
  createData(
    "Biryani Rice",
    "5",
    "2d 23h 40m 60s",
    "22/12/23 8.00 PM",
    "20",
    "500.19",
    "400"
  ),
];

const SingleItemDiscount = () => {
  const menuItems = [
    {
      icon: <ModeEditOutlinedIcon fontSize="small" />,
      label: "Edit Discount",
      onClick: () => {
        setEditDiscountModal(true);
      },
    },
    {
      icon: <DeleteOutlineOutlinedIcon fontSize="small" />,
      label: "Delete Discount",
      onClick: () => {
        setDeleteConfirm(true);
      },
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [editDiscountModal, setEditDiscountModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box>
        <Box>
          <Top_section />
        </Box>

        <Box>
          <TableComp columns={columns}>
            {columns.slice(0, columns.length - 1).map((cur, ind) => {
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
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.order}</StyledTableCell>
                  <StyledTableCell>{row.itemCount}</StyledTableCell>
                  <StyledTableCell>{row.createdOn}</StyledTableCell>
                  <StyledTableCell>{row.createdBy}</StyledTableCell>
                  <StyledTableCell>{row.window}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton>
                      <MoreVertIcon onClick={handleClick} />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableComp>
        </Box>
      </Box>

      <MenuList
        open={open}
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        menuItems={menuItems}
      />

      <DeleteMenuMadal
        open={deleteConfirm}
        setOpen={setDeleteConfirm}
        msg="Are you sure you want to delete this Item ?"
      />
      <EditDiscount open={editDiscountModal} setOpen={setEditDiscountModal} />
    </>
  );
};

export default SingleItemDiscount;
