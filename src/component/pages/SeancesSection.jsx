import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip,
  Box,
  CardMedia
} from "@mui/material";
import M1 from "../images/M1.webp";
import M3 from "../images/M3.webp";
import { useTheme } from "@emotion/react";
import ReactPlayer from "react-player";

function SeancesSection() {
  const theme = useTheme();
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imageStyle = {
    height: "304px",
    objectFit: "cover",
  };

  const tooltipTexts = [
    "Lors d'une séance d'hypnose en présentiel avec Mohamed Sbai, dans le confort de son cabinet situé à Rabat Maroc, chaque moment devient une immersion profonde...",
    "Lors d'une séance d'hypnose en ligne avec Mohamed Sbai, vous pouvez profiter du confort de votre maison tout en travaillant sur vous même...",
    "Découvrez les bienfaits de l'hypnose à travers cette vidéo explicative.",
  ];

  const images = [M3, M1, ""];
  const titles = [
    "Séance d'hypnose en presentiel",
    "Séance d'hypnose en ligne",
    "Vidéo Live session",
  ];

  return (
    <Box>
      <Container sx={{ py: 9 }}>
        <Typography variant="h3" sx={{ color: theme.palette.four.main, fontWeight: "bold" }} component="h2" textAlign="start" gutterBottom>
          Séances
        </Typography>
        <Grid container spacing={3} mt={3}>
          {titles.map((title, index) => (
            <Grid item xs={12} md={4} key={title} style={{ display: 'flex' }}>
              <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardHeader
                  title={title}
                  titleTypographyProps={{ noWrap: true }}
                />
                {index === 2 ? (
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    style={imageStyle}
                    controls
                  />
                ) : (
                  <CardMedia
                    component="img"
                    style={imageStyle}
                    image={images[index]}
                    alt={title}
                  />
                )}
                <CardContent sx={cardStyle}>
                  <Tooltip title={tooltipTexts[index]} placement="top" arrow>
                    <Typography>{tooltipTexts[index]}</Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SeancesSection;