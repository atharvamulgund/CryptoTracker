import { useEffect, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
useLocation;
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
const CryptoCurrenices = () => {
  const location = useLocation();
  const count = location.pathname === "/cryptocurrencies" ? 100 : 12;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
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
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
          alignItems: "center",
          gap: "2rem",

          background: "secondary.main",
          flexDirection: "column",
        }}
        maxWidth="false"
      >
        {" "}
        {location.pathname === "/cryptocurrencies" ? (
          <TextField
            label="Search Cryptocurrency..."
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            sx={{ marginTop: "2rem" }}
          />
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            alignItems: "center",
            gap: "2rem",
            padding: 0,
          }}
        >
          {cryptos?.map((currency, key) => {
            return (
              <>
                <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                  <Card
                    sx={{
                      display: "flex",
                      padding: "1rem",
                      justifyContent: "space-around",
                      maxWidth: { lg: "320px", sm: "320px", xs: "300px" },
                      maxHeight: { lg: "320px", sm: "320px", xs: "300px" },
                      width: "100%",
                      height: "100%",
                      boxShadow: "0 0 5px 0 rgb(0,0,0,0.4)",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto", padding: "0" }}>
                        <Typography
                          component="div"
                          variant="h5"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            gap: "0.5rem",
                          }}
                          key={key}
                        >
                          {currency.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Rank: {currency.rank}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography variant="body2" color="primary">
                          Price: {millify(currency.price)} $
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Market Cap: {millify(currency.marketCap)}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Daily Change: {millify(currency.change)} %
                        </Typography>
                      </Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 90, objectFit: "contain" }}
                      image={currency.iconUrl}
                      alt="Live from space album cover"
                    />
                  </Card>
                </Link>
              </>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default CryptoCurrenices;
