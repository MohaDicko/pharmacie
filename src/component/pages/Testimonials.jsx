import React from "react";
import {
  Card,
  Box,
  Grid,
  Container,
  Typography,
  Paper,
  CardContent,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import HalimaVideo from "../images/halimaalaoui.mp4";
import Intervention from "../images/intevention.mp4";
import image1 from "../images/testimonialIG/1.jpeg";
import image2 from "../images/testimonialIG/2.jpeg";
import image3 from "../images/testimonialIG/3.jpeg";
import image4 from "../images/testimonialIG/4.jpeg";
import image5 from "../images/testimonialIG/5.jpeg";
import { useTheme } from "@emotion/react";

// Mise à jour du tableau pour utiliser les images importées
const testimonials = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  // Ajoutez d'autres images si nécessaire
];

function Testimonials() {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
    <Box sx={{backgroundColor : theme.palette.two.main}}>
    <Container>
        <Grid container spacing={3} mt={0}>
          <Grid item xs={12} md={12} key={"title"}>
            <Typography
              variant="h3"
              component="h2"
              textAlign="start"
              gutterBottom
              sx={{ color: theme.palette.four.main, fontWeight: "bold" }} 
            >
              Intérventions et Live Radio
            </Typography>
            <Grid container spacing={3} mt={3}>
              <Grid item xs={12} md={6} key={"video"}>
                <Paper className="p-4">
                  <ReactPlayer
                    className="react-player rounded-lg"
                    url={Intervention}
                    width={"100%"}
                    height={350}
                    controls={true}
                    pip={true}
                    muted={true}
                    // light={true}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} key={"video2"}>
                <Paper className="p-4">
                  <ReactPlayer
                    className="react-player rounded-lg"
                    url={HalimaVideo}
                    width={"100%"}
                    height={350}
                    controls={true}
                    pip={true}
                    muted={true}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} key={"slider"}>
            <Typography
              variant="h3"
              component="h2"
              textAlign="start"
              gutterBottom
              sx={{ color: theme.palette.four.main, fontWeight: "bold" }} 

            >
              Témoignages
            </Typography>
            <Box sx={{ flexGrow: 1, padding: 5 }}>
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6">
                    <Card>
                      <CardContent>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          paddingBottom={2}
                        >
                          <img
                            src={testimonial.image}
                            alt={`Testimonial ${index + 1}`}
                            style={{
                              width: "100%",
                              height: 300,
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
   
    </>
  );
}

export default Testimonials;
