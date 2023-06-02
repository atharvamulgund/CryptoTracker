/* eslint-disable react/button-has-type */

import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation;
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const value = !location.pathname === "/" ? 1000 : 300;
    setIsVisible(scrollTop > value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      sx={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        backgroundColor: "#120E43",
        color: "#fff",
        borderRadius: "24px",
        zIndex: "1000",
        opacity: isVisible ? 1 : 0,
        boxShadow: "0 0 2px 0 rgb(255,255,255,0.6)",
      }}
      onClick={scrollToTop}
      className="scrollTopBtn"
    >
      Scroll To Top
    </Button>
  );
}

export default ScrollToTopButton;
