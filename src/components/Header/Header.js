import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, InputBase, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";

const navigationData = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "Menu",
    value: "/menu",
    subMenus: [
      { label: "Discount Items", value: "/discounts" },
      { label: "Items", value: "/items" },
      { label: "Menus", value: "/menu" },
      { label: "Menu Category", value: "/category" },
      { label: "Choices", value: "/choices-list" },
    ],
  },
  {
    label: "Reports",
    value: "/report",
  },
  {
    label: "Settings",
    value: "/setting",
  },
  {
    label: "Help",
    value: "/help",
  },
  {
    label: <PersonOutlineOutlinedIcon />,
    value: "/account",
  },
];

const FormatText = styled("h1")({
  fontSize: "25px",
  lineHeight: "36px",
  fontFamily: "FontFamily(Font(R.font.poppins))",
  color: "black",
  fontWeight: "600",
});
const NavigationsText = styled("h1")({
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "19px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#000000",
});

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {/* preNavBar */}
      <Box
        bgcolor="#96D780"
        height={50}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
        }}
      >
        <Box>
          <NavigationsText>Items On Discount : 0</NavigationsText>
        </Box>

        <Box
          sx={{
            display: "flex",
            //  borderRight: "2px solid ",
            //  height: "50px"
          }}
        >
          <Box sx={{ position: "relative", display: "flex" }}>
            <InputBase
              placeholder="Add items on discount......"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#fff",
                paddingLeft: "9px",
                height: "32px",
                width: "35vw",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ fontSize: "20px", fontWeight: "600" }} />
            </Box>
          </Box>
          <Box
            sx={{
              margin: "0 0 0 1.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InfoOutlinedIcon onClick={logoutHandler} />
          </Box>
        </Box>
      </Box>

      {/* Main app bar */}
      <Box>
        <AppBar
          sx={{
            backgroundColor: "#85D8D9",
            height: "65px",
            marginTop: "50px",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ margin: "0px", padding: "0px" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{
                color: "black",
                // borderLeft: "2px solid ",
                // height: "65px"
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <Box
                  component="img"
                  sx={{ height: 54 }}
                  alt="Logo"
                  src="/images/logo.png"
                  style={{
                    height: "1.5rem",
                    width: "5rem",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </Link>
            </Typography>

            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {navigationData.map(({ label, value, subMenus }) => (
                <Box key={label}>
                  {subMenus ? (
                    <Button
                      sx={{ color: "#fff", margin: "1rem", cursor: "pointer" }}
                      onClick={handleMenuOpen}
                    >
                      <NavigationsText>{label}</NavigationsText>
                    </Button>
                  ) : (
                    <Button
                      sx={{ color: "#fff", margin: "1rem" }}
                      onClick={() => navigate(value)}
                    >
                      <NavigationsText>{label}</NavigationsText>
                    </Button>
                  )}

                  {subMenus && (
                    <Menu
                      sx={{ borderRadius: "1rem" }}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 0,
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
                      {subMenus.map((subItem) => (
                        <MenuItem
                          sx={{
                            padding: "5px 35px",
                            color: "#212529",
                            fontSize: "16px",
                          }}
                          key={subItem.label}
                          onClick={() => navigate(subItem.value)}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  //  borderRight: "2px solid ",
                  //   height: "65px"
                },
              }}
            >
              <FormatText
                sx={{
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                RS10169
              </FormatText>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
