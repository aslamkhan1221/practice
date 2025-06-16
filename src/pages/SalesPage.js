import React from "react";
import { Box, Typography, Paper, Grid, LinearProgress } from "@mui/material";

const salesTargets = [
  { region: "Aurangabad", progress: 70 },
  { region: "Mumbai", progress: 55 },
  { region: "Pune", progress: 80 },
  { region: "Hyderabad", progress: 45 },
];

const SalesPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sales
      </Typography>
      <Typography mb={2}>
        Detailed sales data by region and performance.
      </Typography>

      <Grid container spacing={3}>
        {salesTargets.map(({ region, progress }) => (
          <Grid item xs={12} sm={6} key={region}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{region}</Typography>
              <Typography variant="body2" color="textSecondary" mb={1}>
                Target Completion
              </Typography>
              <LinearProgress variant="determinate" value={progress} />
              <Typography mt={1}>{progress}% achieved</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SalesPage;
