import getRecords from "@/app/actions/getRecords";
import RecordItem from "./RecordItem";
import { Record } from "@/types";
import { Alert, Box, Paper, Typography } from "@mui/material";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 4 }}
      >
        <Alert severity="error" sx={{ width: "100%", maxWidth: 600 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  if (!records || records.length === 0) {
    return (
      <Box justifyContent="center" alignItems="center" sx={{ p: 4 }}>
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
              mb: 2,
              background: "linear-gradient(to right, #9333ea, #f43f5e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            No Sleep Records Found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Start tracking your sleep to see your history here.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <div className="items-center justify-center mb-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent border-b border-gray-200 pb-6">
          Sleep History
        </h3>
        <ul className="space-y-4">
          {records.map((record: Record) => (
            <RecordItem key={record.id} record={record} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordHistory;
