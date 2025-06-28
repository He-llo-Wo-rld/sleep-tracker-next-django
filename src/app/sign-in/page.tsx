"use client";
import { useAuthStore } from "@/store/authStore";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      console.log("API user", data.user);
      // Оновлюємо Zustand user
      const { useAuthStore } = await import("@/store/authStore");
      useAuthStore.getState().setUser(data.user);
      window.location.href = "/";
    } else {
      const data = await res.json();
      setError(data.error);
    }
  }

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h4" mb={2}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
}
