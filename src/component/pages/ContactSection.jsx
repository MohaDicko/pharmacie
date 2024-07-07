import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    html: "",
    subject: "",
  });

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
    <Container>
      <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
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
          padding: 10,
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
          <span className="bn54span">Envoyer</span>
        </button>
      </Box>
    </Container>
  );
}

export default ContactSection;
