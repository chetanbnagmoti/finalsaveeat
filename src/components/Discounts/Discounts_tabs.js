import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SingleItemDiscount from "./SingleItemDiscount";
import GroupedItemsDiscounts from "./GroupedItemsDiscounts";

const TabsHeadings = {
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "400",
  font: "Inter",
  color: "#000000",
};

const Discounts_tabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Single Item Discount" sx={TabsHeadings} value="1" />
              <Tab label="Grouped Items Discount" sx={TabsHeadings} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SingleItemDiscount />
          </TabPanel>
          <TabPanel value="2">
            <GroupedItemsDiscounts />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Discounts_tabs;
