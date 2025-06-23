import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  const faqs = [
    {
      question: "What is Sleep Tracker?",
      answer:
        "Sleep Tracker is an app designed to help you monitor and improve your sleep quality through personalized insights and recommendations.",
    },
    {
      question: "How does Sleep Tracker work?",
      answer:
        "Sleep Tracker uses advanced algorithms to analyze your sleep patterns and provides actionable tips to improve your sleep quality.",
    },
    {
      question: "Is Sleep Tracker free to use?",
      answer:
        "Sleep Tracker offers a free version with basic features and a premium subscription for advanced features.",
    },
    {
      question: "Can I sync Sleep Tracker with other health apps?",
      answer:
        "Yes, Sleep Tracker integrates with popular health apps to provide a comprehensive overview of your health data.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "grey.100", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: "grey.200" }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
