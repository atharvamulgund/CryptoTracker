/* eslint-disable no-unused-vars */
import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import svgImg from "../assets/Crypto portfolio-rafiki.svg";

import { useGetCryptosQuery } from "../services/cryptoApi";

import CircularProgress from "@mui/material/CircularProgress";

import millify from "millify";
import { Link } from "react-router-dom";
import CryptoCurrenices from "./CryptoCurrenices";
import News from "./News";
const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const getGlobalState = data?.data.stats;
  if (isFetching)
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <CircularProgress size="lg" />
        </Box>
      </>
    );
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "2rem",
          padding: "2rem",
          flexDirection: { lg: "row", sm: "row", xs: "column-reverse" },
        }}
        maxWidth="false"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2rem",
            padding: "2rem",
            width: { lg: "75%", sm: "75%", xs: "100%" },
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{
              textAlign: { xs: "center", lg: "left", sm: "left" },
              mt: "1rem",
              width: "100%",
            }}
          >
            Global Crypto Stats
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              flexDirection: { lg: "row", sm: "row", xs: "column" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography variant="body1" color="primary">
                Total Cryptocurrencies
                <br />
                <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                  {getGlobalState.total}
                </span>
              </Typography>
              <Typography variant="body1" color="primary">
                Total Market Caps
                <br />
                <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                  {millify(getGlobalState.totalMarketCap)}
                </span>
              </Typography>
              <Typography variant="body1" color="primary">
                Total Markets
                <br />
                <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                  {millify(getGlobalState.totalMarkets)}
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography variant="body1" color="primary">
                Total Exchange
                <br />
                <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                  {millify(getGlobalState.totalExchanges)}
                </span>
              </Typography>
              <Typography variant="body1" color="primary">
                Total 24h Volume
                <br />
                <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                  {millify(getGlobalState.total24hVolume)}
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: "35%", sm: "35%", xs: "100%" },
          }}
        >
          <img
            src={svgImg}
            alt="CryptoTracker"
            width="100%"
            className="bounce"
          />
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        maxWidth="false"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontSize: { lg: "3rem", sm: "2rem", xs: "1.5rem" },
              padding: "1rem",
            }}
          >
            Top Cryptocurrency in the world
          </Typography>
          <Link to="/cryptocurrencies">
            <Button
              variant="contained"
              color="primary"
              sx={{ display: { lg: "flex", sm: "flex", xs: "none" } }}
            >
              Show More
            </Button>
          </Link>
        </Box>
        <CryptoCurrenices />
        <Link to="/cryptocurrencies">
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: { lg: "none", sm: "none", xs: "flex" },
              paddingBottom: "1rem",
            }}
          >
            Show More
          </Button>
        </Link>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        maxWidth="false"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontSize: { lg: "3rem", sm: "2rem", xs: "1.5rem" },
              padding: "1rem",
            }}
          >
            Latest Cryptocurrency News
          </Typography>
          <Link to="/news">
            <Button
              variant="contained"
              color="primary"
              sx={{ display: { lg: "flex", sm: "flex", xs: "none" } }}
            >
              Show More
            </Button>
          </Link>
        </Box>
        <News simpilified />
        <Link to="/news">
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: { lg: "none", sm: "none", xs: "flex" },
              marginBottom: "1rem",
            }}
          >
            Show More
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
