import { Box, Container, Typography } from "@mui/material";
import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
  return (
    <Box sx={{ bgcolor: "grey.100", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Settings
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <UserProfile routing="hash" />
        </Box>
      </Container>
    </Box>
  );
}
