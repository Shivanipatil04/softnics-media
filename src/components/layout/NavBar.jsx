import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Result" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact Us" },
];

const NavBar = () => {
  const trigger = useScrollTrigger({ threshold: 20 });

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? "white" : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
            }}
          >
            {/* LOGO */}
            <Box
              component={motion.img}
              src={logo}
              alt="Softnics Media"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              sx={{
                height: 55, // Bigger logo
                cursor: "pointer",
                objectFit: "contain",
              }}
            />

            {/* MENU ITEMS */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {sections.map((section) => (
                <ScrollLink
                  key={section.id}
                  to={section.id}
                  smooth
                  offset={-90}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "text.primary",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {section.label}
                  </Button>
                </ScrollLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
