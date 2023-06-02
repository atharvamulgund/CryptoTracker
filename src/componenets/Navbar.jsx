import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Link } from "react-router-dom";

const pages = ["Home", "Cryptocurrencies", "News"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "primary.main",
        boxShadow: "0 0 10px 0 rgba(255,255,255,0.8)",
      }}
    >
      <Container maxWidth="false">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <CurrencyExchangeIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: { lg: ".3rem", sm: ".3rem", xs: "0" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CryptoTracker
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
                  <Link to={`/${page.toLowerCase()}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                  <a
                    href="http://atharvamulgund.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ display: { lg: "flex", sm: "flex", xs: "none" } }}
                    >
                      say Hello
                    </Button>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CurrencyExchangeIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: { lg: ".3rem", sm: ".3rem", xs: "0" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CryptoTracker
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            {pages.map((page) => (
              <>
                <Link to={`/${page.toLowerCase()}`}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                    color="secondary"
                  >
                    {page}
                  </Button>
                </Link>
              </>
            ))}
          </Box>

          <a
            href="http://atharvamulgund.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ display: { lg: "flex", sm: "flex", xs: "none" } }}
            >
              say Hello
            </Button>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
