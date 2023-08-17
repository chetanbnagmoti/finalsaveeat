import React from "react";
import ModalComp from "../../CustomComponents/ModalComponent";
import {
  Button,
  Fab,
  FormLabel,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const AddItemChoiceModal = ({ open, setOpen }) => {
  return (
    <>
      <ModalComp open={open} setOpen={setOpen} title={"Add Item To Choice"}>
        <Grid container spacing={1}>
          {/* Choice NAME */}
          <Grid item lg={12}>
            <FormLabel component="legend" className="label-heading">
              Choice Name
            </FormLabel>

            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12}>
            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12}>
            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12}>
            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12}>
            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>

          <Grid item lg={11}>
            <Select
              sx={{ marginTop: "10px", height: 48 }}
              fullWidth
              defaultValue="Select Type"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Veg Toppings</MenuItem>
              <MenuItem value={20}>Biryani</MenuItem>
              <MenuItem value={20}>Noodles</MenuItem>
              <MenuItem value={20}>Munchurian</MenuItem>
            </Select>
          </Grid>
          <Grid
            item
            lg={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fab
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
              size="small"
            >
              <AddIcon sx={{ fontWeight: "600", color: "white" }} />
            </Fab>
          </Grid>

          <Grid
            item
            lg={12}
            sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
          >
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
              Save Choices
            </Button>
          </Grid>
        </Grid>
      </ModalComp>
    </>
  );
};

export default AddItemChoiceModal;
