import getRecords from "app/api/records/getRecords";
import { Alert, Box, Paper, Typography } from "@mui/material";
import BarChart from "./BarChart";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 4 }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!records || records.length === 0) {
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
            No Sleep Records Found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Start tracking your sleep to see your records here.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            background: "linear-gradient(to right, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sleep Records Chart
        </Typography>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </Paper>
    </Box>
  );
};

export default RecordChart;
