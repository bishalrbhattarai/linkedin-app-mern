import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import coverPic from "../../public/cover.jpg";
import profilePic from "../../public/profile.jpg";
import AddIcon from "@mui/icons-material/Add";

export const Left = () => {
  return (
    <Box
      sx={{
        flex: 1,
        // bgcolor: "red",
        // position: "relative",
        borderRadius: 20,
      }}
    >
      <img
        src={coverPic}
        style={{
          borderRadius: 7,

          width: "100%",
          height: 65,
        }}
      />

      <Avatar
        sx={{
          border: "3px solid white",
          position: "fixed",
          top: 110,
          left: 215,
          height: 65,
          width: 65,
        }}
        src={profilePic}
      />
      <Box p={1}>
        <Typography mt={4} variant="h6">
          Bishal Raj Bhattarai
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "light",
          }}
        >
          TypeScript/ Nodejs/ Reactjs Fullstack Developer
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "lighter  ",
          }}
        >
          Kathmandu, Bagmati
        </Typography>

        <Box mt={1}>
          <Button
            startIcon={<AddIcon />}
            size="small"
            fullWidth={true}
            sx={{
              textTransform: "capitalize",
              color: "black",
              fontWeight: "light",
              border: "1px dashed black",
            }}
          >
            Experience
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
