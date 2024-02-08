import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Cloud Resturant</Typography>
        <p>
        Welcome to Cloud Restaurant, a celestial dining experience that elevates your senses to new heights. Located in the heart of [Location], our restaurant invites you to embark on a culinary journey like no other, where every dish is a harmonious blend of innovation, flavor, and artistry
        </p>
        <br />
        <p>
        At Cloud Restaurant, we believe in crafting moments of culinary bliss, inspired by the ethereal beauty of the sky. Our menu reflects this philosophy, offering a fusion of global cuisines expertly prepared by our talented chefs. From delicate appetizers to sumptuous entrées and heavenly desserts, each dish is a masterpiece, meticulously created using the finest ingredients sourced from trusted suppliers.

Step into our enchanting dining space, where contemporary elegance meets timeless charm. Whether you're celebrating a special occasion, hosting a corporate event, or enjoying a romantic dinner for two, our dedicated staff is committed to providing impeccable service and ensuring your dining experience is nothing short of extraordinary.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
