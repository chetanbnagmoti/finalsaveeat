import React, { useState } from "react";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TableComp from "../CustomComponents/TableComp";
import {StyledTableCell,StyledTableRow} from "../CustomComponents/TableCellAndRow";

const columns = [
  { id: "name", label: "Item Name + Variant", minWidth: 150, align: "left" },
  { id: "img", label: "Image", minWidth: 50, align: "left" },
  {
    id: "type",
    label: "FoodType",
    minWidth: 70,
    align: "left",
  },
  {
    id: "tax",
    // label: "Size\u00a0(km\u00b2)",
    label: "TaxType",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cusine",
    label: "Cusine ",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "sub",
    label: "Sub Cusine ",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "weight",
    // Size\u00a0(km\u00b2)
    label: "Weight\u00a0(g\u00b2)",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "price",
    label: "Food Price ",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "window",
    label: "Item Window",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },

  {
    id: "action",
    label: "Action",
    minWidth: 20,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  name,
  img,
  foodType,
  MRP,
  TaxRate,
  Cusine,
  subCusine,
  Weight,
  foodPrice,
  itemWindow
) {
  return {
    name,
    img,
    foodType,
    MRP,
    TaxRate,
    Cusine,
    subCusine,
    Weight,
    foodPrice,
    itemWindow,
  };
}

const rows = [
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
  createData(
    "Biryani Rice",
    "IMG",
    "Veg",
    "MRP",
    5,
    "Rice",
    "Rice",
    "142g",
    120,
    "All Days"
  ),
];

export default function ItemsTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TableComp columns={columns}>
        {rows.map((row, ind) => {
          return (
            <StyledTableRow hover key={ind} role="checkbox" tabIndex={-1}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.img}</StyledTableCell>
              <StyledTableCell>{row.foodType}</StyledTableCell>
              <StyledTableCell>{row.TaxRate}</StyledTableCell>
              <StyledTableCell>{row.Cusine}</StyledTableCell>
              <StyledTableCell>{row.subCusine}</StyledTableCell>
              <StyledTableCell>{row.Weight}</StyledTableCell>
              <StyledTableCell>{row.foodPrice}</StyledTableCell>
              <StyledTableCell>{row.itemWindow}</StyledTableCell>
              <StyledTableCell>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableComp>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <ModeEditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Edit Item
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Delete Item
        </MenuItem>
      </Menu>
    </>
  );
}
