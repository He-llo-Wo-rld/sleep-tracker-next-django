"use client";

import { Container, Box, Typography, Paper } from "@mui/material";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

export default function Guest() {
  return (
    <Box sx={{ bgcolor: "grey.100", color: "grey.800" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "grey.200",
          py: 8,
          backgroundImage: "url('/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "right bottom",
          height: { xs: "50vh", md: "75vh", lg: "100vh" },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome to{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(to top right, #3b82f6, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sleep Tracker
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "grey.600", mb: 2 }}>
                Track your sleep, improve your habits, and achieve better rest.
                Sign up today to get started!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SignInButton>
                  <button className="btn-primary">Get Started</button>
                </SignInButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="h6">Sleep Tracking</Typography>
              <Typography sx={{ color: "grey.600" }}>
                Monitor your sleep patterns and get detailed insights.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="h6">Personalized Tips</Typography>
              <Typography sx={{ color: "grey.600" }}>
                Receive tailored advice to improve your sleep quality.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="h6">Health Integration</Typography>
              <Typography sx={{ color: "grey.600" }}>
                Sync with your favorite health apps for a complete overview.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: "grey.200", py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Users Say
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Paper sx={{ flex: 1, p: 2, textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Sleep Tracker has completely transformed my sleep habits. I feel
                more rested and productive!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                - John Doe
              </Typography>
            </Paper>
            <Paper sx={{ flex: 1, p: 2, textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                The personalized tips are amazing. I never realized how much my
                habits affected my sleep.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                - Jane Smith
              </Typography>
            </Paper>
            <Paper sx={{ flex: 1, p: 2, textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                I love the health integration feature. It gives me a complete
                picture of my well-being.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                - Emily Johnson
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Improve Your Sleep?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "grey.600", mb: 4 }}
          >
            Join thousands of users transforming their sleep habits with Sleep
            Tracker.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SignInButton>
              <button className="btn-primary">Get Started</button>
            </SignInButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
