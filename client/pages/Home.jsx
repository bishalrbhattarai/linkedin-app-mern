import React from "react";
import { Navbar } from "./../src/components/Navbar";
import { Container } from "@mui/material";
import { Left } from "../src/components/Left";
import { Right } from "./../src/components/Right";
import { Feed } from "../src/components/Feed";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          gap: 4,
        }}
      >
        <Left />
        <Feed />
        <Right />
      </Container>
    </>
  );
};
