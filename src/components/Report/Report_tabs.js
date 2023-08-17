import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Order_wise_report from "./Order_wise_report";
import Item_wise_report from "./Item_wise_report";
import Discounted_item_reports from "./Discounted_item_reports";
import Change_req from "./Change_req";

const TabsHeadings = {
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "400",
  font: "Inter",
  color: "#000000",
};

const TabComp = () => {
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
              <Tab label="Order Wise Reports" sx={TabsHeadings} value="1" />
              <Tab label="Item Wise Reports" sx={TabsHeadings} value="2" />
              <Tab
                label="Discounted Item Reports"
                sx={TabsHeadings}
                value="3"
              />
              <Tab label="Change Request Logs" sx={TabsHeadings} value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Order_wise_report />
          </TabPanel>
          <TabPanel value="2">
            <Item_wise_report />
          </TabPanel>
          <TabPanel value="3">
            <Discounted_item_reports />
          </TabPanel>
          <TabPanel value="4">
            <Change_req />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default TabComp;
