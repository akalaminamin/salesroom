import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "./Modal/Modal";

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCategoryModal = () =>{
    setAnchorEl(null)
    setOpenModal(true)
  }
  return (
    <div>
      <Button
        sx={{ borderRadius: 16 }}
        variant="outlined"
        startIcon={<DeleteIcon />}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Add
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleCategoryModal}>Category</MenuItem>
        <MenuItem onClick={handleClose}>Product</MenuItem>
        <MenuItem onClick={handleClose}>Menual</MenuItem>
        <MenuItem onClick={handleClose}>Catalogue</MenuItem>
        <MenuItem onClick={handleClose}>CAD Drowings</MenuItem>
        <MenuItem onClick={handleClose}>Vidoes</MenuItem>
      </Menu>
      <AlertDialog openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}
