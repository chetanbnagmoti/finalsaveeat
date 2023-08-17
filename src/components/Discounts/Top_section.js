import { Box, Button } from "@mui/material";
import React from "react";

const Top_section = () => {
    
  return (
    <>
      <Box>
        <div style={{ float: "right", marginBottom: "0.5rem" }}>
          <Button
            variant="contained"
            sx={{
              "&": {
                backgroundColor: "#96D780",
              },
              "&:hover": {
                backgroundColor: "#96D780",
              },
            }}
            disableElevation
          >
            Add To Discount
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Top_section;
