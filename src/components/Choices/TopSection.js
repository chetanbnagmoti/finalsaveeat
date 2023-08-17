import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CreateChoiceModal from "./Modal/CreateChoiceModal";
import AddItemChoiceModal from "./Modal/AddItemChoiceModal";

const TopSection = () => {
  const [createChoiceModal, setCreateChoiceModal] = useState(false);
  const [addItemChoiceModal, setaddItemChoiceModal] = useState(false);

  return (
    <>
      <Box>
        <div
          style={{ float: "right", marginTop: "1rem", marginBottom: "0.5rem" }}
        >
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
            onClick={() => setCreateChoiceModal(true)}
          >
            Create a Choice
          </Button>

          <Button
            sx={{
              marginLeft: "9px",
              "&": {
                backgroundColor: "#96D780",
              },
              "&:hover": {
                backgroundColor: "#96D780",
              },
            }}
            variant="contained"
            disableElevation
            onClick={() => setaddItemChoiceModal(true)}
          >
            Add Items To Choice
          </Button>
        </div>
      </Box>

      <CreateChoiceModal
        open={createChoiceModal}
        setOpen={setCreateChoiceModal}
      />
      <AddItemChoiceModal
        open={addItemChoiceModal}
        setOpen={setaddItemChoiceModal}
      />
    </>
  );
};

export default TopSection;
