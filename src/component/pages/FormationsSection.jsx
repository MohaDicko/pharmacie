import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { useTheme } from "@emotion/react";

function FormationsSection() {
  const theme = useTheme();
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.one.main, overflow: 'hidden' }}>
      <Container sx={{ py: 5 }}>
        <Typography variant="h3" sx={{ color: theme.palette.four.main, fontWeight: "bold" }} component="h2" textAlign="start" gutterBottom>
          Temoignages 
        </Typography>
        <Slider {...settings}>
          {formations.map((formation) => (
            <motion.div
              key={formation._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card raised sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
                <CardContent>
                  <Tooltip title={formation.title}>
                    <Typography gutterBottom variant="h5" component="div" className="line-clamp-1">
                      {formation.title}
                    </Typography>
                  </Tooltip>
                  <Tooltip title={formation.description}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}  className="line-clamp-1">
                      {formation.description}
                    </Typography>
                  </Tooltip>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Chip label={`${formation.price} Dh`} color="primary" />
                    <Tooltip title="Date de la formation">
                      <Typography variant="body2" color="text.secondary">
                        {format(new Date(formation.dateFormation), "dd/MM/yyyy")}
                      </Typography>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default FormationsSection;