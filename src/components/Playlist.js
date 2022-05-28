import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

function Playlist({ vidsData, selected, setSelected }) {
  const [selectedVid, setSelectedVid] = useState(0);
  const handleSelection = (i, x) => {
    setSelectedVid(i);
    setSelected(x.snippet.resourceId.videoId);
  };
  return (
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
                <StarIcon style={{ fontSize: "2rem" }} />
              </ListItemIcon>
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}

export default Playlist;
