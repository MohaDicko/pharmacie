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
import M1 from "../images/A4.jpg";
import M3 from "../images/A2.jpg";
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
    "...............",
    "...............",
    "...............",
  ];

  const images = [M3, M1, ""];
  const titles = [
    "Tensiométrie",
    "Glycémie",
    "Vidéo Live session",
  ];

  return (
    <Box>
      <Container sx={{ py: 9 }}>
        <Typography variant="h3" sx={{ color: theme.palette.four.main, fontWeight: "bold" }} component="h2" textAlign="start" gutterBottom>
          Services 
           
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
                    url="https://www.youtube.com/watch?v=yUpGOPueQAc"
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