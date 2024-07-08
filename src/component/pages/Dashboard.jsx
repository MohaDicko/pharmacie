import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Dashboard() {
  const [formations, setFormations] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    dateFormation: "",
  });
  const [editingId, setEditingId] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    const response = await fetch(`${API_URL}/api/formations`);
    const data = await response.json();
    setFormations(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const endpoint = editingId
      ? `${API_URL}/api/formations/${editingId}`
      : `${API_URL}/api/formations`;

    await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "", category: "", price: 0, dateFormation: "" });
    setEditingId(null);
    fetchFormations();
  };

  const handleEdit = (formation) => {
    setForm({
      title: formation.title,
      description: formation.description,
      category: formation.category,
      price: formation.price,
      dateFormation: formation.dateFormation,
    });
    setEditingId(formation._id);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/api/formations/${id}`, { method: "DELETE" });
    fetchFormations();
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Formations Dashboard</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <TextField
                label="Category"
                variant="outlined"
                fullWidth
                margin="normal"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                type="number"
              />
              <TextField
                label="Date de formation"
                variant="outlined"
                fullWidth
                margin="normal"
                value={form.dateFormation}
                onChange={(e) => setForm({ ...form, dateFormation: e.target.value })}
                type="date"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                {editingId ? "Update" : "Create"}
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {formations.map((formation) => (
              <ListItem key={formation._id} divider>
                <ListItemText
                  primary={formation.title}
                  secondary={`${formation.category} - ${formation.price}€`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(formation)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(formation._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;