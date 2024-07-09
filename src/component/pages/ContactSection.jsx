import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useTheme } from "@emotion/react";

function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    html: "",
    subject: "",
  });
const theme = useTheme();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez connecter cette fonction à votre API
    console.log(formData);
    alert("Votre message a été envoyé !");
  };

  return (
    <Container sx={{py : 9}}>
      <Typography variant="h3" component="h2" textAlign="start"  sx={{ color: theme.palette.four.main, fontWeight: "bold" }}   gutterBottom>
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
        <TextField
          required
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          
        />
        <TextField
          required
          label="Téléphone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          required
          label="Sujet"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          required
          label="Message"
          name="html"
          multiline
          rows={4}
          value={formData.html}
          onChange={handleChange}
        />
        <button className="bn54 p-3" type="submit">
          <span className="bn54span"> <MailOutlineIcon /> Envoyer</span>
        </button>
      </Box>
    </Container>
  );
}

export default ContactSection;
