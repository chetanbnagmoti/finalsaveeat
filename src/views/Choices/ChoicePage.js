import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import { Box } from "@mui/material";
import TopSection from "../../components/Choices/TopSection";
import ChoicesTable from "../../components/Choices/ChoicesTable";

const ChoicePage = () => {
  return (
    <>
      <BrandPanelLayout>
        <Box>
          <TopSection />
          <Box>
            <ChoicesTable />
          </Box>
        </Box>
      </BrandPanelLayout>
    </>
  );
};

export default ChoicePage;
