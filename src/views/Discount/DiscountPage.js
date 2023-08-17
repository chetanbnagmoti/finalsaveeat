import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import { Box } from "@mui/material";
import Discounts_tabs from "../../components/Discounts/Discounts_tabs";

const DiscountPage = () => {
  return (
    <>
      <BrandPanelLayout>
        <Box>
            <Discounts_tabs/>
        </Box>
      </BrandPanelLayout>
    </>
  );
};

export default DiscountPage;
