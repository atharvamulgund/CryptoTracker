import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CryptoCurrenices from "./pages/CryptoCurrenices";
import CryptoDetails from "./pages/CryptoDetails";
import Echanges from "./pages/Echanges";
import News from "./pages/News";
import Navbar from "./componenets/Navbar";
import { Container, Typography } from "@mui/material";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrenices />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        {/* <Route path="/exchanges" element={<Echanges />} /> */}
        <Route path="news" element={<News />} />
      </Routes>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.main",
          padding: "2rem",
        }}
        maxWidth="false"
      >
        <Typography variant="b0dy1" color="secondary">
          © All Rights Reserved 2023 | Made By{" "}
          <a
            href="http://atharvamulgund.web.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
            }}
          >
            Atharva Mulgund
          </a>
        </Typography>
      </Container>
    </>
  );
}

export default App;
