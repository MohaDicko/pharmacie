import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function FormationsSection() {
  const [formations, setFormations] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchFormations = async () => {
      const response = await fetch(`${API_URL}/api/formations`);
      const data = await response.json();
      setFormations(data);
    };

    fetchFormations();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
        Formations
      </Typography>
      <Slider {...settings}>
        {formations.map((formation) => (
          <motion.div
            key={formation._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {formation.title}
                </Typography>
                <Typography color="textSecondary">
                  {formation.description}- {formation.price}
                </Typography>
                {/* Ajoutez plus de détails ici si nécessaire */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Slider>
    </Container>
  );
}

export default FormationsSection;
