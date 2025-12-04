import React from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import SectionWrapper from "../common/SectionWrapper";
import { services } from "../../data/services";
import CloseIcon from "@mui/icons-material/Close";

// Icons for each service
import BrushIcon from "@mui/icons-material/Brush";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

// Thin arrow icon like screenshot
import EastIcon from "@mui/icons-material/East";

const getServiceIcon = (key) => {
  switch (key) {
    case "design":
      return <BrushIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "marketing":
      return <TrendingUpIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "camera":
      return <PhotoCameraIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "video":
      return <VideoCallIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "podcast":
      return <HeadphonesIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "voice":
      return <RecordVoiceOverIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "website":
      return <LanguageIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    case "app":
      return <PhoneIphoneIcon sx={{ fontSize: 40, color: "primary.main" }} />;
    default:
      return <BrushIcon sx={{ fontSize: 40, color: "primary.main" }} />;
  }
};

const ServicesSection = () => {
  // ----------------------------------
  // STATE (must be inside component)
  // ----------------------------------
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  // ----------------------------------
  // COMPONENT RETURN
  // ----------------------------------
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="Creative, Digital & Technology Solutions Under One Roof"
      bg="white"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.title}
            sx={{
              width: { xs: "100%", sm: "47%", md: "30%" },
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              p: 3,
              backgroundColor: "white",
              transition: "0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              "&:hover": {
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                transform: "translateY(-5px)",
              },
            }}
          >
            {getServiceIcon(service.icon)}

            <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", mt: 1 }}>
              {service.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              {service.description}
            </Typography>

            <EastIcon
              onClick={() => handleOpen(service)}
              sx={{
                fontSize: 20,
                color: "grey.600",
                cursor: "pointer",
                mt: 1,
                transition: "0.2s",
                "&:hover": { color: "primary.main", transform: "translateX(4px)" },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* ----------------------------------
          MODAL DIALOG
      ---------------------------------- */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            fontWeight: 700,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selectedService?.title}

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ lineHeight: 1.8 }}>
          <Typography sx={{ mb: 2 }}>
            {selectedService?.description}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {selectedService?.longDescription ||
              "We provide complete end-to-end solutions tailored to your business needs. Contact us to know more."}
          </Typography>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default ServicesSection;
