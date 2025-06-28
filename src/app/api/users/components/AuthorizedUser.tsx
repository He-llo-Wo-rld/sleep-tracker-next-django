"use client";

import Loader from "@/components/Loader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, Box, Paper, Typography } from "@mui/material";

export default function AuthorizedUser() {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return <Loader />;
  }

  if (!user) return null;

  const firstName = user.name || user.email || "Guest";

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
        p: 4,
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Avatar
        alt={`${firstName}'s avatar`}
        sx={{
          width: 96,
          height: 96,
          border: "2px solid",
          borderColor: "primary.main",
          boxShadow: 2,
        }}
      />

      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Welcome, {firstName}! 🫷
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
          We&#39;re glad to have you here. Start tracking your sleep and
          improving your habits today!
        </Typography>

        <Box sx={{ mt: 4, color: "text.secondary" }}>
          <Typography variant="body2">
            <strong>Joined:</strong>{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Unknown"}
          </Typography>
          <Typography variant="body2">
            <strong>Last Active:</strong>{" "}
            {user.updatedAt
              ? new Date(user.updatedAt).toLocaleDateString()
              : "Unknown"}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
