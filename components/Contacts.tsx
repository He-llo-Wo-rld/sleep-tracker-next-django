"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    if (formData.name && formData.email && formData.message) {
      setAlert({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setAlert({
        type: "error",
        message: "Please fill out all fields before submitting.",
      });
    }
  };

  return (
    <Box sx={{ bgcolor: "grey.100", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Contact Us
        </Typography>

        {alert && (
          <Alert severity={alert.type} sx={{ mb: 2 }}>
            {alert.message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Name Field */}
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Email Field */}
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Message Field */}
            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(to top right, #3b82f6, #a855f7)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(to top right, #2563eb, #9333ea)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}
