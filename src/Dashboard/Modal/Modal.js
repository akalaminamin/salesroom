import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl} from "@mui/material";

export default function AlertDialog({ openModal, setOpenModal }) {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={openModal}
        onClose={handleClose}
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"Add Category"}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth={true} variant="outlined">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={handleClose}>Cancle</Button>
          <Button variant="primary" onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
