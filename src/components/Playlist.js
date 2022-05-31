import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, withStyles } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  // status: {
  //   danger: "#e53e3e",
  // },
  palette: {
    primary: {
      main: "#FFCC00",
      //  darker: "#053e85",
    },
    // neutral: {
    //   main: "#64748B",
    //   contrastText: "#fff",
    // },
  },
});

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 9,
  },
}));
function Playlist({ vidsData, selected, setSelected, saveBookMark, bookMark }) {
  const [selectedVid, setSelectedVid] = useState(0);
  const handleSelection = (i, x) => {
    setSelectedVid(i);
    setSelected(x.snippet.resourceId.videoId);
  };

  return (
    <ThemeProvider theme={theme}>
      <List
        sx={{
          width: "100%",
          maxWidth: 900,
          bgcolor: "background.paper",
          marginTop: "100px",
          overflow: "auto",
          position: "relative",
          maxHeight: 400,
          fontSize: "1.5rem",
        }}
      >
        {vidsData.map((x, i) => {
          return (
            <>
              <ListItemButton
                alignItems="flex-start"
                selected={i === selectedVid}
                onClick={() => handleSelection(i, x)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="thumbnail"
                    src={x.snippet.thumbnails.default.url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div style={{ fontSize: "1.5rem", fontWeight: 500 }}>
                      {x.snippet.title}
                    </div>
                  }
                />
                <ListItemIcon>
                  <BootstrapTooltip title="BookMark">
                    <StarIcon
                      color={
                        bookMark.includes(x.contentDetails.videoId)
                          ? "primary"
                          : ""
                      }
                      style={{ fontSize: "2rem" }}
                      onClick={(e) => {
                        saveBookMark(x.contentDetails.videoId);
                      }}
                    />
                  </BootstrapTooltip>
                </ListItemIcon>
              </ListItemButton>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </ThemeProvider>
  );
}

export default Playlist;
