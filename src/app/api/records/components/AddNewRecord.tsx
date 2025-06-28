"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Paper,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import addSleepRecord from "app/api/records/addSleepRecord";
import { useRef, useState } from "react";

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(8);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [sleepDate, setSleepDate] = useState("");

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set("amount", amount.toString());
    formData.set("text", sleepQuality);
    formData.set("date", sleepDate);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType("error");
    } else {
      setAlertMessage("Sleep record added successfully!");
      setAlertType("success");
      formRef.current?.reset();
      setAmount(8);
      setSleepQuality("");
      setSleepDate("");
    }

    setIsLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2, maxWidth: 600, width: "100%" }}
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
          Track Your Sleep
        </Typography>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
        >
          <Box mb={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Sleep Quality
            </Typography>
            <Select
              value={sleepQuality}
              onChange={(e) => setSleepQuality(e.target.value)}
              fullWidth
              displayEmpty
              sx={{ borderRadius: 1 }}
              required
            >
              <MenuItem value="" disabled>
                Sleep quality...
              </MenuItem>
              <MenuItem value="Refreshed">🌞 Refreshed</MenuItem>
              <MenuItem value="Tired">😴 Tired</MenuItem>
              <MenuItem value="Neutral">😐 Neutral</MenuItem>
              <MenuItem value="Exhausted">😫 Exhausted</MenuItem>
              <MenuItem value="Energetic">⚡ Energetic</MenuItem>
            </Select>
          </Box>

          <Box mb={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Sleep Date
            </Typography>
            <TextField
              type="date"
              fullWidth
              required
              value={sleepDate}
              onChange={(e) => setSleepDate(e.target.value)}
              sx={{ borderRadius: 1 }}
            />
          </Box>

          <Box mb={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Hours Slept
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "text.secondary" }}
              >
                (Select between 0 and 12 in steps of 0.5)
              </Typography>
            </Typography>
            <Slider
              value={amount}
              onChange={(e, value) => setAmount(value as number)}
              min={0}
              max={12}
              step={0.5}
              marks
              valueLabelDisplay="on"
              className="slider-gradient"
            />
          </Box>

          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              className="btn-primary"
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Add Sleep Record"
              )}
            </Button>
          </Box>
        </form>

        {alertMessage && (
          <Alert
            severity={alertType === "success" ? "success" : "error"}
            sx={{ mt: 3 }}
          >
            {alertMessage}
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default AddRecord;
