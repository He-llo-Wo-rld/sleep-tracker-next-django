import React from "react";
import getUserRecord from "@/app/actions/getUserRecord";
import { Box, Typography, Paper } from "@mui/material";

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    const averageSleep = validRecord / validDays;

    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <Box justifyContent="center" alignItems="center">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "grey.600",
              mb: 2,
            }}
          >
            Your Average Sleep Last Month
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",

              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {hours} hours {minutes} minutes
          </Typography>
        </Paper>
      </Box>
    );
  } catch (error) {
    console.error("Error fetching user record:", error);
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: "grey.100", minHeight: "100vh", p: 4 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            width: "100%",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "grey.600",
              mb: 2,
            }}
          >
            Error
          </Typography>
          <Typography variant="body1" sx={{ color: "error.main" }}>
            Unable to calculate average sleep.
          </Typography>
        </Paper>
      </Box>
    );
  }
};

export default AverageSleep;
