import React, { useState } from "react";
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
import SideMenu from "./Drawer";

const pages = ["Home", "About", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false);

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
  const handlePage = (page) => {
    console.log(page);
    if (page === "About") {
      return <Link to="/about"></Link>;
    }
  };
  const sideMenu = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" style={{ background: "#f2cc25", color: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Namaste JavaScript
            </Link>
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
              <MenuIcon onClick={() => sideMenu()} />
            </IconButton>

            <SideMenu open={open} setOpen={(e) => setOpen(e)} />
          </Box>

          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: "50px" }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "#000",
              }}
            >
              Namaste JavaScript
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={page === "Home" ? "/" : `/${page}`}
                style={{ textDecoration: "none", color: "#000", margin: "1em" }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
