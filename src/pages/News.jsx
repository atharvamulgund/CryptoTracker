import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment/moment";
import { Box, CircularProgress, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

const News = () => {
  const location = useLocation();
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrencies",
    count: location.pathname === "/news" ? 100 : 6,
  });
  const baseImg =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  if (!cryptoNews?.value)
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
          paddingBottom: "2rem",
          marginTop: location.pathname === "/news" ? "2rem" : 0,
        }}
        maxWidth="false"
      >
        {cryptoNews?.value?.map((item, key) => {
          return (
            <>
              <Card
                key={key}
                sx={{
                  maxWidth: { lg: 420, sm: 420, xs: 320 },
                  maxHeight: { lg: 420, sm: 420, xs: "100%" },
                  height: "420px",
                  padding: "1rem",
                  boxShadow: "0 0 5px 0 rgb(0,0,0,0.4)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      // flexDirection: { lg: "row", sm: "row", xs: "column" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <img
                        style={{ objectFit: "contain" }}
                        src={item?.image?.thumbnail?.contentUrl || baseImg}
                        title={item?._type}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="name-line-clamp"
                      sx={{
                        fontSize: { lg: "1.5rem", sm: "2rem", xs: "1rem" },
                      }}
                    >
                      {item?.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      marginTop: "2rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontStyle: "italic",
                        fontWeight: "200",
                        opacity: "0.6",
                        textAlign: "left",
                      }}
                    >
                      Published on:{" "}
                      {moment(item?.datePublished).startOf("ss").fromNow()}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary"
                      className="description-line-clamp"
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <a href={item?.url} target="_blank" rel="noopener noreferrer">
                    <Button size="small" variant="contained" color="primary">
                      Read More
                    </Button>
                  </a>

                  <Box
                    sx={{
                      width: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={
                        item.provider[0]?.image?.thumbnail?.contentUrl ||
                        baseImg
                      }
                      width="20%"
                      alt={item?.provider.name}
                    />
                    {item.provider[0]?.name}
                  </Box>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default News;
