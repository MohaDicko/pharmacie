import React, { useState } from "react";
import { Box, TextField, Typography, Container, Snackbar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useTheme } from "@emotion/react";
import Backcircle from "../images/circle-scatter-haikei.svg";
import axios from "axios"; // Ensure Axios is imported

function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    html: "",
    subject: "",
  });
  const API_URL = import.meta.env.VITE_API_URL;

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation des champs requis
    const { email, phone, html, subject } = formData;
    if (!email || !phone || !html || !subject) {
      setSnackbarMessage("Veuillez remplir tous les champs requis.");
      setSnackbarOpen(true);
      return;
    }
  
    try {
      const response = await axios.post(`${API_URL}/api/sendemail`, formData);
      setSnackbarMessage("Votre message a été envoyé !");
      setSnackbarOpen(true);
      // Reset du formulaire après l'envoi réussi
      setFormData({
        email: "",
        phone: "",
        html: "",
        subject: "",
      });
    } catch (error) {
      setSnackbarMessage("Erreur lors de l'envoi du message.");
      setSnackbarOpen(true);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.one.main,
        backgroundImage: `url(${Backcircle})`,
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ py: 9 }}>
        <Typography variant="h3" component="h2" textAlign="start" sx={{ color: theme.palette.four.main, fontWeight: "bold" }} gutterBottom>
          Contactez-nous ou Prenez un rendez-vous
        </Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <TextField required label="Téléphone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          <TextField required label="Sujet" name="subject" value={formData.subject} onChange={handleChange} />
          <TextField required label="Message" name="html" multiline rows={4} value={formData.html} onChange={handleChange} />
          <button className="bn54 p-3" type="submit">
            <span className="bn54span"><MailOutlineIcon /> Envoyer</span>
          </button>
        </Box>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </Box>
  );
}

export default ContactSection;
