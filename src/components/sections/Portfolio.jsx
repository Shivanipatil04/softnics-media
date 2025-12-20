import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import results
import result2 from "../../assets/results/result_2.png";
import result3 from "../../assets/results/result_3.png";
import result4 from "../../assets/results/result_4.png";
import result5 from "../../assets/results/result_5.png";
import result6 from "../../assets/results/result_6.png";
import result7 from "../../assets/results/result_7.png";
import result8 from "../../assets/results/result_8.png";
import result9 from "../../assets/results/result_9.png";
import result10 from "../../assets/results/result_10.png";
import result11 from "../../assets/results/result_11.png";
import result12 from "../../assets/results/result_12.png";
import result13 from "../../assets/results/result_13.png";
import result14 from "../../assets/results/result_14.png";
import result15 from "../../assets/results/result_15.png";
import result16 from "../../assets/results/result_16.png";
import result17 from "../../assets/results/result_17.png";
import result18 from "../../assets/results/result_18.png";
import result19 from "../../assets/results/result_19.png";
import result20 from "../../assets/results/result_20.png";

const results = [
  result2, result3, result4, result5, result6, result7, result8, result9, result10,
  result11, result12, result13, result14, result15, result16, result17, result18,
  result19, result20
];

const Portfolio = () => {
  const navigate = useNavigate();

  // ⭐ Fix navbar not scrolling from portfolio page
  useEffect(() => {
    const handleNavClick = (e) => {
      const section = e.target.getAttribute("data-scroll-to");
      if (!section) return;

      e.preventDefault();

      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, [navigate]);

  return (
    <Box sx={{ padding: "40px 20px", maxWidth: "1300px", margin: "auto" }}>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        {results.map((img, index) => (
          <motion.div
            key={index}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
              transition: {
                duration: 0.6,          // ⭐ Faster animation
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.03     // ⭐ Faster stagger
              },
            }}
            viewport={{ once: true }}
            style={{
              height: "300px",
              borderRadius: "12px",
              overflow: "hidden",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
            sx={{
              width: {
                xs: "100%",               // Mobile view: 1 image
                sm: "calc(50% - 15px)",   // Desktop: 2 per row
              }
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </motion.div>
        ))}
      </Box>

    </Box>
  );
};

export default Portfolio;
