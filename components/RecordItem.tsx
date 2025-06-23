"use client";

import { useState } from "react";
import { Record } from "@/types";
import deleteRecord from "@/app/actions/deleteRecord";
import {
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        mb: 2,
        borderLeft: `4px solid ${record?.amount < 7 ? "#ef4444" : "#22c55e"}`,
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          {new Date(record?.date).toLocaleDateString()}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {record?.amount} hours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sleep Mode: {record?.text}
        </Typography>
      </Box>
      <IconButton
        onClick={() => handleDeleteRecord(record.id)}
        color="error"
        disabled={isLoading}
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: isLoading ? "error.light" : "error.main",
          "&:hover": {
            bgcolor: "error.dark",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: "purple" }} />
        ) : (
          <DeleteIcon sx={{ color: "white" }} />
        )}
      </IconButton>
    </Paper>
  );
};

export default RecordItem;
