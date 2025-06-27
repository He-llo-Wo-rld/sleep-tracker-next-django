"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const { user, loading } = useCurrentUser();

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
           {loading ? null : user ? (
            <>
              <Link href="/" className="gradient-navbar">
                Dashboard
              </Link>
              <Link href="/logout" className="gradient-navbar">
                Logout
              </Link>
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
