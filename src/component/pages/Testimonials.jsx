import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  // Ajoutez 3 témoignages supplémentaires ici pour faire un total de 6
  {
    name: "John Doe",
    text: "Ce service est incroyable! J'ai vu une amélioration significative après seulement quelques sessions.",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "John Doe",
    text: "Ce service est incroyable! J'ai vu une amélioration significative après seulement quelques sessions.",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "John Doe",
    text: "Ce service est incroyable! J'ai vu une amélioration significative après seulement quelques sessions.",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "John Doe",
    text: "Ce service est incroyable! J'ai vu une amélioration significative après seulement quelques sessions.",
    avatar: "/path/to/avatar1.jpg",
  },
  // Les autres témoignages...
];

function Testimonials() {
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
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
       <Typography variant="h3" component="h2" textAlign="start" gutterBottom>
        Témoignages
      </Typography>
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
                  <Avatar
                    src={testimonial.avatar}
                    sx={{ width: 56, height: 56, marginBottom: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default Testimonials;
