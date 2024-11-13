import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const CustomModal = ({ id, open, onClose, onSubmit,title }) => {
  const [newTag, setNewTag] = useState(''); // state to store new tag input

  const handleInputChange = (e) => {
    setNewTag(e.target.value);
  };

  const handleSubmit = () => {
    if (newTag.trim()) {
      onSubmit(newTag);  // Send the new tag to the parent
      setNewTag('');      // Clear the input field
    }
  };

  return (
    <Dialog open={open} onClose={onClose}
    PaperProps={{
        style: {
          width: '300px',    // Set the width of the modal
          height: '210px',   // Set the height of the modal
        }
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          label="Tag Name"
          fullWidth
          value={newTag}
          onChange={handleInputChange}
          autoFocus
          sx={{marginTop:'10px'}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Add Tag</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
