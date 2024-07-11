import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from "@emotion/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ bgcolor: theme.palette.one.main, p: 2 }} component="footer">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Social Media
              </Typography>
              <Box>
                <IconButton
                  aria-label="Facebook"
                  component="a"
                  href="https://facebook.com"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  component="a"
                  href="https://twitter.com"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  component="a"
                  href="https://instagram.com"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href="https://linkedin.com"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary" mt={2}>
              "Votre santé, notre priorité : Bienvenue à la Pharmacie Humaine!"
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Trouvez nous
              </Typography>
              <MapContainer
                center={[34.020882, -6.84165]}
                zoom={9}
                scrollWheelZoom={false}
                style={{ height: "200px", width: "100%" }}
                className="rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[34.020882, -6.84165]}>
                  <Popup>We are here!</Popup>
                </Marker>
              </MapContainer>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
                align="center"
              >
                Made with ❤️ by{" "}
                <Link
                  href="https://mdicko.vercel.app"
                  target={"_blank"}
                  color="inherit"
                >
                  Mohamed DICKO
                </Link>{" "}
                
                
        
                
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <a
          href="https://wa.me/212661291579"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="my-float" />
        </a>
  
    </>
  );
};

export default Footer;
