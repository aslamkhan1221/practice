import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const reports = [
  {
    id: 1,
    title: "Monthly Sales Report",
    description: "Summary of sales for last month",
    date: "2025-05-31",
  },
  {
    id: 2,
    title: "Customer Activity Report",
    description: "Details on customer logins and activities",
    date: "2025-05-30",
  },
  {
    id: 3,
    title: "Inventory Report",
    description: "Current inventory status",
    date: "2025-05-29",
  },
];

const ReportsPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Typography mb={2}>
        Access and download various business reports.
      </Typography>

      <Paper>
        <List>
          {reports.map((report) => (
            <ListItem
              key={report.id}
              secondaryAction={
                <Button variant="outlined" size="small">
                  Download
                </Button>
              }
            >
              <ListItemText
                primary={report.title}
                secondary={`${report.description} — Date: ${report.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ReportsPage;
