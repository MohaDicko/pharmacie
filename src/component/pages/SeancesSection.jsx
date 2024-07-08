import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import M1 from "../images/M1.webp";
import M2 from "../images/M2.webp";
import M3 from "../images/M3.webp";

function SeancesSection() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imageStyle = {
    height: "304px", // Uniform height
    objectFit: "cover", // Prevent distortion
  };

  const tooltipTexts = [
    "Lors d'une séance d'hypnose en présentiel avec Mohamed Sbai, dans le confort de son cabinet situé à Rabat Maroc, chaque moment devient une immersion profonde...",
    "Lors d'une séance d'hypnose en ligne avec Mohamed Sbai, vous pouvez profiter du confort de votre maison tout en travaillant sur vous même...",
    // "Mohamed Sbai a fait de nombreuses conférences et interventions pour discuter des bienfaits de l'hypnose sur la santé physique, psychique et émotionnelle...",
  ];

  const images = [M3, M1];
  const titles = [
    "Séance d'hypnose en presentiel",
    "Séance d'hypnose en ligne",
    // "Conférences et interventions"
  ];

  return (
    <Container sx={{ py: 9 }}>
      <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
        Séances
      </Typography>
      <Grid container spacing={3} mt={3}>
        {/* <Grid item xs={12} md={12} key={"title"}>
         
        </Grid> */}
        {titles.map((title, index) => (
          <Grid item xs={12} md={4} key={title}>
            <Card>
              <CardHeader
                title={title}
                titleTypographyProps={{ noWrap: true }}
              />
              <CardMedia
                component="img"
                style={imageStyle}
                image={images[index]}
                alt={title}
              />
              <CardContent sx={cardStyle}>
                <Tooltip title={tooltipTexts[index]} placement="top" arrow>
                  <Typography>{tooltipTexts}</Typography>
                </Tooltip>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SeancesSection;
