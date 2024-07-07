import React from "react";
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
// Import Material-UI icons
import AnchorIcon from '@mui/icons-material/Anchor';
import GroupIcon from '@mui/icons-material/Group';
import BlockIcon from '@mui/icons-material/Block';
import { Link } from "react-router-dom";
import PhotoSbai from "../images/0.png";
import { styled } from "@mui/material/styles";
import MyBlob from "../images/blob.svg";
import { theme } from "../../ThemeProvider";
// Import react-awesome-reveal animations
import { Fade, Slide } from "react-awesome-reveal";

const CustomCard = styled(Card)(({ theme }) => ({
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));


function PresentationSection() {
  return (
    <>
      <Container sx={{ py: 9 }}>
      <Fade direction="up" triggerOnce>
          <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
            Soins & prestations
          </Typography>
        </Fade>
        <Grid container spacing={3} mt={3}>
          {[
            {
              Icon: AnchorIcon, // Updated icon
              title: "Se libérer des freins qui vous entravent",
              description:
                "Peur, anxiété, manque de confiance en soi, traumas...",
            },
            {
              Icon: GroupIcon, // Updated icon
              title: "Constellation familiale",
              description:
                "Se défaire des héritages qui freinent, des schémas répétitifs, du poids de l'histoire familiale.",
            },
            {
              Icon: BlockIcon, // Updated icon
              title: "Addictions",
              description:
                "Arrêt de tabac, compulsions alimentaires, Troubles obsessionnels compulsifs...",
            },
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
             <Slide direction="down">
                <CustomCard>
                  <CardContent
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <service.Icon size={30} style={{ marginBottom: 10 }} />
                    <Typography variant="h5" component="h3" className="line-clamp-1">
                      {service.title}
                    </Typography>
                    <Typography className="line-clamp-2">{service.description}</Typography>
                  </CardContent>
                </CustomCard>
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Link to={"/"}>
            <button className="bn54 p-3">
              <span className="bn54span">Prenez un rendez-vous</span>
            </button>
          </Link>
        </Box>
      </Container>
      <Box sx={{ mt: 2, bgcolor: theme.palette.one.main, p: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Rencontrez Mohamed Sbai
          <Box
            component="span"
            sx={{
              float: "right",
              ml: 2,
              backgroundImage: `url(${MyBlob})`,
              backgroundSize: "cover",
            }}
          >
             <Slide direction="right">
             <img
              src={PhotoSbai}
              alt="Mohamed Sbai"
              style={{ height: 300, maxWidth: "100%" }}
            />
             </Slide>
         
          </Box>
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify", mt: 2, p: 3 }}>
          Expert en hypnose, certifié par la Guilde Américaine des
          Hypnothérapeutes et plusieurs écoles d'hypnothérapie. Avec plus de 20
          ans d'expérience, il a aidé des centaines de clients à surmonter
          divers problèmes, notamment l'anxiété, les phobies, les troubles de
          l'alimentation, et les dépendances. Il utilise des techniques avancées
          d'hypnothérapie pour offrir des résultats rapides et durables,
          permettant à ses clients de vivre une vie plus épanouie et sereine.
        </Typography>
      </Box>
    </>
  );
}

export default PresentationSection;