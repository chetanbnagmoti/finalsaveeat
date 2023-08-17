import React, { useState } from "react";
import ModalComp from "../../CustomComponents/ModalComponent";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CreateChoiceModal = ({ open, setOpen }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <ModalComp open={open} setOpen={setOpen} title={"Create A Choice"}>
        <Box
          component="form" //  onSubmit={submitHandler} noValidate
        >
          <Grid container spacing={1}>
            {/* Choice NAME */}
            <Grid item lg={8}>
              <FormLabel component="legend" className="label-heading">
                Choice Name
              </FormLabel>

              <OutlinedInput
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder="Choice Name"
                aria-describedby="outlined-weight-helper-text"
              />
            </Grid>

            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FormLabel component="legend" className="label-heading">
                  Status <Divider /> Closed
                </FormLabel>
                <FormControlLabel
                  sx={{ ml: 3 }}
                  control={<IOSSwitch sx={{ mr: 1 }} defaultChecked />}
                />
              </Box>
            </Grid>

            <Grid item lg={12} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Choice Options
              </FormLabel>
              <OutlinedInput
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder="Choice Options"
                aria-describedby="outlined-weight-helper-text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTag();
                  }
                }}
              />

              <Box sx={{ display: "flex", mt: 1 }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={handleDeleteTag(tag)}
                    style={{ margin: "4px" }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Food Type
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
                <MenuItem value={10}>Veg</MenuItem>
                <MenuItem value={20}>Non-Veg</MenuItem>
              </Select>
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Price
              </FormLabel>

              <OutlinedInput
                type="number"
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder="Price"
                aria-describedby="outlined-weight-helper-text"
              />
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Min Qty
              </FormLabel>

              <OutlinedInput
                type="number"
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder="Min Qty"
                aria-describedby="outlined-weight-helper-text"
              />
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Max Qty
              </FormLabel>

              <OutlinedInput
                type="number"
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder=" Max Qty"
                aria-describedby="outlined-weight-helper-text"
              />
            </Grid>

            <Grid
              item
              lg={12}
              sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
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
                // onClick={}
              >
                Save Choices
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ModalComp>
    </>
  );
};

export default CreateChoiceModal;
