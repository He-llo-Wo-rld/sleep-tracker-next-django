import React from "react";
import getBestWorstSleep from "@/app/actions/getBestWorstSleep";
import { Box, Typography, Paper, Divider } from "@mui/material";

const BestWorstSleep = async () => {
  const { bestSleep, worstSleep } = await getBestWorstSleep();

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
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 4,
            background: "linear-gradient(to right, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Best and Worst Sleep
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "grey.600",
                mb: 2,
              }}
            >
              Best Sleep
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #22c55e, #16a34a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {bestSleep !== undefined
                ? `${bestSleep} hours`
                : "No data available"}
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "grey.300" }}
          />

          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "grey.600",
                mb: 2,
              }}
            >
              Worst Sleep
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #ef4444, #dc2626)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {worstSleep !== undefined
                ? `${worstSleep} hours`
                : "No data available"}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BestWorstSleep;
