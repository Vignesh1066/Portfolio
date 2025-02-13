import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import ecommerce from "../assets/bike.jpg";
import doctor from "../assets/doctorbooking.jpg";
import portfolio from "../assets/PortfolioProject.jpg";
import audi from "../assets/AudiProject.jpg";
import moviebooking from "../assets/moviebooking2.jpg";

function CardsComponent({ data }) {
  const { projectName, buttonPath, projectimage } = data;

  return (
    <Card
      component={Link}
      to={buttonPath}
      sx={{
        position: "relative",
        height: 400,
        display: "flex",
        flexDirection: "column",
        boxShadow: 6,
        overflow: "hidden",
        borderRadius: 2,
        textDecoration: "none",
        "&:hover .overlay": {
          transform: "translateY(0)",
          backgroundColor: "gray.200",
        },
        "&:hover .content": {
          opacity: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        image={projectimage}
        alt={projectName}
        sx={{
          opacity: 0.9,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(244,240,236, 0.6)",
          transform: "translateY(100%)",
          transition:
            "transform 0.5s ease-in-out, background-color 0.3s ease-in-out",
          zIndex: 1,
        }}
      ></Box>
      <CardContent
        className="content"
        sx={{
          position: "absolute",
          bottom: "2.5rem",
          zIndex: 2,
          left: "0.5rem",
          opacity: 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Typography
          align="left"
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "black",
          }}
        >
          {projectName}
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#0d9488",
          }}
        >
          Web Application
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardsGrid() {
  const data = [
    {
      projectId: 1,
      projectName: "E-Commerce for Bike Spares",
      projectimage: ecommerce,
      buttonPath: "https://github.com/orgs/E-Commerce-BikeSpares/repositories",
    },
    {
      projectId: 2,
      projectName: "Movie Ticket Booking",
      projectimage: moviebooking,
      buttonPath: "https://github.com/orgs/PopcornSpot/repositories",
    },
    {
      projectId: 3,
      projectName: "Doctor Appointment Booking",
      projectimage: doctor,
      buttonPath: "https://github.com/Vignesh1066",
    },
    {
      projectId: 4,
      projectName: "Responsive Design Portfolio",
      projectimage: portfolio,
      buttonPath: "https://github.com/Vignesh1066/Portfolio/tree/Front-End",
    },
    {
      projectId: 5,
      projectName: "Audi Performance Edge ",
      projectimage: audi,
      buttonPath: "https://github.com/Vignesh1066/Audi/tree/Front-End",
    },
  ];

  return (
    <Container
      id="project"
      sx={{
        py: 5,
        pb: 10,
        background: "#1f2937",
        width: "100%",
      }}
      maxWidth={false}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          pb: 6,
          fontWeight: "bold",
          background: "#10b981",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Some Of My Works
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardsComponent data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardsGrid;
