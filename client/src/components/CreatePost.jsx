import { Avatar, Box, Button, Card, TextField } from "@mui/material";
import React from "react";
import profilePic from "../../public/profile.jpg";

import YouTubeIcon from "@mui/icons-material/YouTube";
import PhotoIcon from "@mui/icons-material/Photo";

import FeedIcon from "@mui/icons-material/Feed";

const buttonStyle = {
  textTransform: "capitalize",
  fontWeight: "light",
  color: "black",
};

export const CreatePost = () => {
  return (
    <Card elevation={2}>
      <Box sx={{ display: "flex", p: 3, gap: 2 }}>
        <Box>
          <Avatar
            sx={{
              height: 40,
              width: 40,
            }}
            src={profilePic}
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <TextField
            size="small"
            fullWidth
            placeholder="What's on your mind ?"
            InputProps={{
              sx: {
                borderRadius: "25px", // Make the corners fully rounded
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          color: "black",
        }}
      >
        <Box>
          <Button
            startIcon={
              <PhotoIcon sx={{ color: "lightblue", fontWeight: "bold" }} />
            }
            sx={buttonStyle}
          >
            Photo
          </Button>
        </Box>

        <Box>
          <Button startIcon={<YouTubeIcon />} sx={buttonStyle}>
            Video
          </Button>
        </Box>

        <Box>
          <Button startIcon={<FeedIcon />} sx={buttonStyle}>
            Write Article
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
