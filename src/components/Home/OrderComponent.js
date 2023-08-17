import React from 'react'
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
const OrderComponent = ({item}) => {
  return (
    <>
         <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{
                borderRadius: "8px",
                height: "100%",
                padding: "5px",
                backgroundColor: "#FF8181",
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
    </>
  )
}

export default OrderComponent