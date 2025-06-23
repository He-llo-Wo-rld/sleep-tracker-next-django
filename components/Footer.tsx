import Link from "next/link";
import { Typography, Box, Container, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "grey.800", color: "grey.300", py: 4 }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          {/* Logo and Description */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="/" className="logo">
              Sleep Tracker
            </Link>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Helping you improve your sleep quality and overall well-being with
              personalized insights.
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Links for logged-in users */}
            <SignedIn>
              <Typography
                component={Link}
                href="/about"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                About
              </Typography>
              <Typography
                component={Link}
                href="/"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                Dashboard
              </Typography>
              <Typography
                component={Link}
                href="/settings"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                Settings
              </Typography>

              <Typography
                component={Link}
                href="/faqs"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                FAQs
              </Typography>
              <Typography
                component={Link}
                href="/contact"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                Contact Us
              </Typography>
            </SignedIn>

            {/* Links for guests */}
            <SignedOut>
              <Typography
                component={Link}
                href="/about"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                About
              </Typography>
              <Typography
                component={Link}
                href="/contact"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                Contacts
              </Typography>
              <Typography
                component={Link}
                href="/faqs"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "white" },
                }}
              >
                FAQs
              </Typography>
            </SignedOut>
          </Box>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <IconButton
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{ textAlign: "center", borderTop: "1px solid grey.700", pt: 2 }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Sleep Tracker. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
