import React from "react";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";

const MenuList = ({ open, setAnchorEl, anchorEl, menuItems }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        {menuItems.map((item, index) => {
          return (
            <div key={item.label}>
              <MenuItem onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
              {index !== menuItems.length - 1 && <Divider />}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuList;
