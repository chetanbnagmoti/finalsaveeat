import React, { useState } from "react";
import { Box, Card, IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupedItemsDisTable from "./GroupedItemsDisTable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuList from "../CustomComponents/MenuList";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DeleteMenuMadal from "../CustomComponents/DeleteMenuMadal";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const GroupedItemsDiscounts = () => {
  const menuItems = [
    {
      icon: <ModeEditOutlinedIcon fontSize="small" />,
      label: "Edit Discount",
      onClick: () => {
        console.log("CLICK EDIT ITEM");
      },
    },
    {
      icon: <DeleteOutlineOutlinedIcon fontSize="small" />,
      label: "Delete Discount",
      onClick: () => {
        setDeleteConfirm(true);
      },
    },
    {
      icon: <ContentCopyIcon fontSize="small" />,
      label: "Duplicate Item",
      onClick: () => {
        setDuplicateConfirm(true);
      },
    },
  ];
  const [expanded, setExpanded] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [duplicateConfirm, setDuplicateConfirm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Accordion
          TransitionProps={{ unmountOnExit: true }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ height: "85px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              borderRadius: "8px",
              height: "100%",
              padding: "5px",
              margin: "0px",
              backgroundColor: "#85d8d9",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "0px",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: 24, fontWeight: 600, fontFamily: "Poppins" }}
                >
                  Menu Name 30 Items
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                  Timer : 2d 23h 40m 60s
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  margin: 1,
                }}
              >
                <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                  20% OFF
                </Typography>
                <Box sx={{ margin: 1 }}>
                  <IconButton onClick={console.log("Clicked")}>
                    <MoreVertIcon onClick={handleClick} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ p: 1.2 }}>
              <GroupedItemsDisTable />
            </Card>
          </AccordionDetails>
        </Accordion>
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
        msg="Are you sure you want to delete this group ? "
      />
      <DeleteMenuMadal
        open={duplicateConfirm}
        setOpen={setDuplicateConfirm}
        msg="Are you sure you want to Duplicate this group ? "
      />
    </>
  );
};

export default GroupedItemsDiscounts;
