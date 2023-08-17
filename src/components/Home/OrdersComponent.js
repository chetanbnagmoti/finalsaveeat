import React, { useState } from "react";
import { Box, Card, Typography, styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupedItemsDisTable from "../Discounts/GroupedItemsDisTable";

const OrderHeadings = styled("h1")({
  fontFamily: "Poppins",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "left",
});
const SubHeadings = styled("h6")({
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: "300",
  textAlign: "left",
});

const orderData = [
  {
    id: "panel1",
    orderNumber: "OD1234",
    orderDateTime: "12/12/2023 | 45:44",
    customerName: "Richa Chordia",
    orderTotal: "RS 500.00",
    orderType: "Placed order",
  },
  {
    id: "panel2",
    orderNumber: "OD5678",
    orderDateTime: "11/15/2023 | 12:30",
    customerName: "John Doe",
    orderTotal: "RS 300.00",
    orderType: "Accepted order",
  },
  {
    id: "panel3",
    orderNumber: "OD4385",
    orderDateTime: "18/14/2021 | 11:30",
    customerName: "kalpesh Wani",
    orderTotal: "RS 10,000.00",
    orderType: "Accepted order",
  },
  {
    id: "panel4",
    orderNumber: "OD32623",
    orderDateTime: "18/15/2018 | 10:45",
    customerName: "kalpesh",
    orderTotal: "RS 9,000.00",
    orderType: "Pickup order",
  },
  {
    id: "panel5",
    orderNumber: "OD4435",
    orderDateTime: "18/15/2018 | 10:45",
    customerName: "kalpesh",
    orderTotal: "RS 9,000.00",
    orderType: "Pickup order",
  },
  {
    id: "panel6",
    orderNumber: "OD0324",
    orderDateTime: "18/15/2018 | 10:45",
    customerName: "kalpesh",
    orderTotal: "RS 9,000.00",
    orderType: "Pickup order",
  },
  {
    id: "panel7",
    orderNumber: "OD9451",
    orderDateTime: "18/15/2018 | 10:45",
    customerName: "kalpesh",
    orderTotal: "RS 9,000.00",
    orderType: "Accepted order",
  },
  {
    id: "panel8",
    orderNumber: "OD5962",
    orderDateTime: "18/15/2018 | 10:45",
    customerName: "kalpesh",
    orderTotal: "RS 9,000.00",
    orderType: "Placed order",
  },
];

const OrderComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        {orderData.map((item) => (
          <Accordion
            key={item.id}
            TransitionProps={{ unmountOnExit: true }}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{ boxShadow: "none", mt: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{
                borderRadius: "8px",
                height: "100%",
                padding: "5px",
                backgroundColor:
                  item.orderType === "Placed order"
                    ? "#FF8181"
                    : item.orderType === "Accepted order"
                    ? "#95CECF"
                    : item.orderType === "Pickup order"
                    ? "#96D780"
                    : null,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  margin: "0px 1.2rem",
                }}
              >
                <Box>
                  <Box>
                    <OrderHeadings sx={{ marginTop: "5px" }}>
                      {item.orderNumber}
                    </OrderHeadings>
                  </Box>

                  <Box sx={{ display: "flex", marginTop: "-10px" }}>
                    <SubHeadings sx={{ margin: "0px", padding: "0px" }}>
                      Order Date & Time :
                      <span style={{ fontWeight: "bold" }}>
                        {item.orderDateTime}
                      </span>
                    </SubHeadings>

                    <SubHeadings sx={{ margin: "0px 1rem", padding: "0px" }}>
                      Customer Name :
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.customerName}
                      </span>
                    </SubHeadings>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <OrderHeadings sx={{ marginTop: "5px" }}>
                    {item.orderTotal}
                  </OrderHeadings>

                  <Box sx={{ display: "flex", marginTop: "-10px" }}>
                    <SubHeadings
                      sx={{ margin: "0px", padding: "0px", fontWeight: "bold" }}
                    >
                      {item.orderType}
                    </SubHeadings>
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ overflowY: "auto" }}>
              <GroupedItemsDisTable />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default OrderComponent;
