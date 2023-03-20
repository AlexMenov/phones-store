import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export const AddProductForm = () => {
  const [photoAddress, setPhotoAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [addedModel, setAddedModel] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/products", {
        photoAddress,
        name,
        description,
        price,
        category,
      });

      // Show the success message dialog
      setDialogOpen(true);

      // Clear the form fields
      setPhotoAddress("");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDialogClose = () => setDialogOpen(false);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Photo Address:
          <input
            type="text"
            value={photoAddress}
            onChange={(event) => setPhotoAddress(event.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setAddedModel(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Product Added</DialogTitle>
        <DialogContent>
          <p>{addedModel} has been successfully added to the database.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
