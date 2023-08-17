import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const DeleteMenuMadal = ({ open, setOpen,msg }) => {
  return (
    <>
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>{msg}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              border: "none",
              color: "#8F8F8F",

              "&": {
                backgroundColor: "#EAEAEA",
                border: "none",
              },
              "&:hover": {
                backgroundColor: "#EAEAEA",
                border: "none",
              },
            }}
            disableElevation
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              ml: 2,
              "&": {
                backgroundColor: "#96D780",
              },
              "&:hover": {
                backgroundColor: "#96D780",
              },
            }}
            disableElevation
            // onClick={}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteMenuMadal;
