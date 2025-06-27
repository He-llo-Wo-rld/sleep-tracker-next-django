import Link from "next/link";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", color: "grey.800" }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "grey.200", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(to top right, #3b82f6, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Sleep Tracker
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.600" }}>
            Learn more about our mission, vision, and the features of the Sleep
            Tracker App.
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Our mission is to help people improve their sleep quality and
            overall well-being through innovative technology and personalized
            insights.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: "grey.200", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
          >
            Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Sleep Tracking
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Monitor your sleep patterns and get detailed insights.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Personalized Tips
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Receive tailored advice to improve your sleep quality.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Health Integration
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Sync with your favorite health apps for a complete overview.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
            Start Your Journey to Better Sleep
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Join thousands of users who are improving their sleep with our app.
          </Typography>
          <Button
            component={Link}
            href="/sign-up"
            className="btn-primary"
            variant="contained"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
