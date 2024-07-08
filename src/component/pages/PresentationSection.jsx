import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
// Import Material-UI icons
import AnchorIcon from "@mui/icons-material/Anchor";
import GroupIcon from "@mui/icons-material/Group";
import SpaIcon from "@mui/icons-material/Spa";
import { Link } from "react-router-dom";
import PhotoSbai from "../images/0.png";
import { styled } from "@mui/material/styles";
import MyBlob from "../images/blob.svg";
import { theme } from "../../ThemeProvider";
import { FaTiktok } from "react-icons/fa";

import { Fade, Slide } from "react-awesome-reveal";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReactPlayer from "react-player";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BackCards from "../images/wavesCards.svg";
// Styled component for hover effect
const CustomCard = styled(Card)(({ theme }) => ({
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  backgroundImage: `url(${BackCards})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",

}));

// Styled component for social link background
const SocialLink = styled("a")(({ theme, gradient }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: gradient,
  color: "#fff",
  textDecoration: "none",
}));

function PresentationSection() {
  return (
    <>
    <Box  sx={{ backgroundColor : theme.palette.one.main}}>

    <Container sx={{ py: 3 }}>
        <Fade direction="up" className="">
          <Typography
            variant="h2"
            component="h2"
            textAlign="start"
            gutterBottom
          >
            Mohamed Sbai
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            textAlign="start"
            gutterBottom
          >
            Hypnopraticien, Energicien, coach psychoemotionnel & formateur
          </Typography>
        </Fade>
        <Container maxWidth={"md"} className="text-center p-2">
          <div className="player-wrapper">
            <h4>Vidéo de présentation</h4>
            <br />
            <Paper sx={{ p: 3, mb: 4 }}>
              <ReactPlayer
                className="react-player rounded-lg"
                url="chemin/vers/votre/video.mp4"
                width="100%"
                height="100%"
                controls={true}
                // playing={true}
                light={true}
                pip={true}
              />
            </Paper>
          </div>

          <div className="flex items-center gap-4 justify-end mb-6">
            <SocialLink
              href="https://www.instagram.com/sbai_mohamed01/"
              target="_blank"
              rel="noopener noreferrer"
              gradient="linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@sbai.mohamedhypnose"
              target="_blank"
              rel="noopener noreferrer"
              gradient="linear-gradient(45deg, #69C9D0, #010101)"
            >
              <FaTiktok />
            </SocialLink>
          </div>
          <hr />
          <Typography
            variant="h3"
            component="h2"
            textAlign="start"
            gutterBottom
          >
            Que peut vous apporter l'hypnose ?
          </Typography>
          <List sx={{ ml: 2 }}>
            {[
              "Se libérer de la peur",
              "Traiter les sources de l'anxiété et du stress",
              "Rompre avec les attachements toxiques",
              "Prendre du recul face à des événements douloureux",
              "Guérir et se réconcilier avec son enfant intérieur",
              "Renforcer l'estime de soi",
              "Se recentrer sur soi",
              "Retrouver un sommeil apaisé",
              "Booster son potentiel",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center" gap={1}>
                      <DoneAllIcon />
                      {text}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Container>
        <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
          Accompagnements 
        </Typography>

        <Grid container spacing={3} mt={3}>
          {[
            {
              Icon: AnchorIcon,
              title: "Libération des freins émotionnels",
              description:
                "Transformez vos peurs, anxiétés et manque de confiance en forces motrices.",
            },
            {
              Icon: GroupIcon,
              title: "Constellation familiale harmonisante",
              description:
                "Débarrassez-vous des schémas répétitifs et des poids familiaux pour une vie plus légère.",
            },
            {
              Icon: SpaIcon,
              title: "Bien-être et relaxation",
              description:
                "Atteignez une détente profonde et un bien-être durable grâce à des techniques avancées.",
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
                    <Typography
                      variant="h5"
                      component="h3"
                      className="line-clamp-1"
                    >
                      {service.title}
                    </Typography>
                    <Typography className="line-clamp-2">
                      {service.description}
                    </Typography>
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
    
    </Box>
    <Box sx={{ bgcolor: theme.palette.two.main, p: 6 }}>
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
