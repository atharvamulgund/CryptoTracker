import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import millify from "millify";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TagIcon from "@mui/icons-material/Tag";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CheckIcon from "@mui/icons-material/Check";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorOutlineOutlined } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import LineChart from "../componenets/LineChart";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return "";

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  console.log(data);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <MonetizationOnIcon />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <TagIcon /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <BoltIcon />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <MonetizationOnIcon />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <EmojiEventsIcon />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <QueryStatsIcon />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <LibraryAddCheckIcon />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? <CheckIcon /> : <CloseIcon />,
      icon: <ErrorOutlineOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ErrorOutlineOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ErrorOutlineOutlined />,
    },
  ];
  return (
    <>
      <Container
        sx={{
          display: "flex",
          marginTop: "2rem",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: { lg: "25%", sm: "25%", xs: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={cryptoDetails.iconUrl}
            alt={cryptoDetails.name}
            width="60%"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
            width: { lg: "40%", sm: "40%", xs: "80%" },
          }}
        >
          <a
            href={cryptoDetails.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="h4" color="primary" sx={{ fontWeight: "700" }}>
              {cryptoDetails.name}
            </Typography>
          </a>
          <Typography variant="body1">
            {" "}
            {HTMLReactParser(cryptoDetails.description)}
          </Typography>
        </Box>
      </Container>
      {/* <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      /> */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h4" color="primary">
            Bitcoin Value Statistics
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            An overview showing the stats of Bitcoin
          </Typography>
          {stats?.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem",
                    boxShadow: "0 0 5px 0 rgb(0,0,0,0.4)",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    {item.icon} <span>{item.title}</span>
                  </Typography>
                  <Typography variant="h6">{item.value}</Typography>
                </Box>
              </>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h4" color="primary" sx={{ fontWeight: "700" }}>
            Other Statistics
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            An overview showing the stats of all cryptocurrencies
          </Typography>
          {genericStats?.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem",
                    boxShadow: "0 0 5px 0 rgb(0,0,0,0.4)",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    {item.icon} <span>{item.title}</span>
                  </Typography>
                  <Typography variant="h6">{item.value}</Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default CryptoDetails;
