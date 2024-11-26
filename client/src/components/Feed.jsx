import { Box } from "@mui/material";
import React from "react";
import { CreatePost } from "./CreatePost";

export const Feed = () => {
  return (
    <Box sx={{ flex: 2.5, backgroundColor: "red" }}>
      <CreatePost />
    </Box>
  );
};
