import {
  AppBar,
  Box,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const Home = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ bgcolor: "white" }}>
          <Container
            sx={{
              border: "1px solid black",
              display: "flex",
              p: 0,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon
                sx={{
                  color: "#00308F",
                  bgcolor: "white",
                  height: 50,
                  width: 50,
                }}
              />
              <TextField
                sx={{
                  m: 1,
                  ".MuiInputBase-input": {
                    padding: "8px 0", // Adjust padding for vertical alignment
                    lineHeight: 1.5, // Adjust line height for better alignment
                    display: "flex",
                    alignItems: "center", // Ensures vertical centering
                  },
                }}
                // variant="filled"
                InputProps={{
                  startAdornment: (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SearchIcon />
                    </Box>
                  ),
                }}
                placeholder="Search"
                size="small"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                // bgcolor: "black",
                height: "100%",
                alignItems: "center",
                px: 2,
                gap: 3,
              }}
            >
              {[
                {
                  name: "Home",
                  icon: (
                    <HomeRoundedIcon
                      sx={{ color: "black", height: 30, width: 30 }}
                    />
                  ),
                },
                {
                  name: "Network",
                  icon: (
                    <GroupAddRoundedIcon
                      sx={{
                        color: "black",
                        height: 30,
                        width: 30,
                        // color: "whitesmoke",
                      }}
                    />
                  ),
                },
                {
                  name: "Jobs",
                  icon: (
                    <WorkRoundedIcon
                      sx={{ color: "black", height: 30, width: 30 }}
                    />
                  ),
                },
                {
                  name: "Messaging",
                  icon: (
                    <MessageIcon
                      sx={{ color: "black", height: 30, width: 30 }}
                    />
                  ),
                },
                {
                  name: "Notifications",
                  icon: (
                    <NotificationsActiveIcon
                      sx={{ color: "black", height: 30, width: 30 }}
                    />
                  ),
                },
              ].map((element, index) => (
                <>
                  <Box
                    key={index}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <IconButton sx={{ height: "100%" }}>
                      {element.icon}
                    </IconButton>

                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        color: "black",
                        fontWeight: "light",
                        fontSize: "10px",
                        textAlign: "center",
                      }}
                    >
                      {element.name}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                // bgcolor: "black",
                height: "100%",
                alignItems: "center",
                px: 2,
                gap: 3,
              }}
            >
              Hell
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
