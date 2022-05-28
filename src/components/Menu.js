// import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from "./Drawer";
// import Logo from "../Assets/Logo.jpg";

// function Menu() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <AppBar position="fixed" style={{ background: "#f2cc25", color: "#000" }}>
//         <Toolbar variant="dense">
//           {/* <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon onClick={() => setOpen(true)} />
//           </IconButton> */}
//           <img src={Logo} alt="logo" style={{ height: "50px" }} />
//           <Typography
//             variant="h6"
//             style={{ fontWeight: 700 }}
//             color="inherit"
//             component="div"
//           >
//             Namaste JavaScript
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer open={open} />
//     </div>
//   );
// }

// export default Menu;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Image } from "@mui/icons-material";
import Logo from "../Assets/Logo.jpg";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{ background: "#f2cc25", color: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <img src={Logo} alt="logo" style={{ height: "50px" }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/namasteJavascript"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Namaste JavaScript
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link to="/namasteJavascript">
            <img src={Logo} alt="logo" style={{ height: "50px" }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/namasteJavascript"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Namaste JavaScript
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "#000", display: "block", fontWeight: 500 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
