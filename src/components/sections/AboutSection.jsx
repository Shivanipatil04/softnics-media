import React from "react";
import { Box, Typography } from "@mui/material";

// If your placeholder is in public folder:
const aboutImage = "/placeholder.png";

const AboutSection = () => {
  return (
    <Box id="about" sx={{ backgroundColor: "#F5F7FF", py: 10 }}>

      {/* ================= ABOUT US - FLEX 50/50 LAYOUT ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          px: { xs: 2, md: 6 },
          gap: 6,
        }}
      >
        {/* LEFT IMAGE AREA */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={aboutImage}
            alt="About Softnics Media"
            sx={{
              width: "100%",
              maxWidth: 450,
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          />
        </Box>

        {/* RIGHT TEXT AREA */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "#0D2A7F", mb: 2 }}
          >
            About Us
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#0D2A7F", mb: 2 }}
          >
            The Journey of Softnics Media
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.8 }}
          >
            Softnics Media is a leading digital marketing and branding agency,
            helping businesses grow with creative strategies, performance marketing,
            and innovative technology. Since 2020, we have partnered with brands
            across industries to boost visibility, increase conversions, and build
            strong digital identities.
            <br /><br />
            From website development and SEO to social media management and paid
            campaigns, we ensure measurable results with creative excellence and a
            data-driven approach. Our goal is simple — transform your brand into a
            digital powerhouse.
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default AboutSection;
