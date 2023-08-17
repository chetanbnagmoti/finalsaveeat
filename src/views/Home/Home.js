import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import { Box } from "@mui/material";
import OrdersComponent from "../../components/Home/OrdersComponent";

const Home = () => {
  return (
    <>
      <BrandPanelLayout>  
        <Box>
          <OrdersComponent />
        </Box>
      </BrandPanelLayout>
    </>
  );
};

export default Home;
