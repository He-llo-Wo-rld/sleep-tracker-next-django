"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAuthStore } from "@/store/authStore";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const { loading } = useCurrentUser();
  
  if (loading) return null;

  return (
    <AppBar position="static" sx={{ bgcolor: "grey.800" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="logo">
          Sleep Tracker
        </Link>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {user ? (
            <>
              <Link href="/" className="gradient-navbar">
                Dashboard
              </Link>
              <Button
                color="inherit"
                className="gradient-navbar"
                onClick={async () => {
                  await fetch("/api/auth/logout", {
                    method: "POST",
                    credentials: "include",
                  });
                  useAuthStore.getState().setUser(null);
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button color="inherit">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button color="inherit">Sign Up</Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
