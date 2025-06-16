import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletIcon from "@mui/icons-material/Tablet";

const trafficSources = [
  { device: "Desktop", visits: 1234 },
  { device: "Mobile", visits: 876 },
  { device: "Tablet", visits: 345 },
];

const TrafficPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Traffic
      </Typography>
      <Typography mb={2}>
        Analyze your website traffic by device type.
      </Typography>

      <Paper>
        <List>
          {trafficSources.map(({ device, visits }) => {
            let icon;
            if (device === "Desktop") icon = <ComputerIcon />;
            else if (device === "Mobile") icon = <PhoneIphoneIcon />;
            else if (device === "Tablet") icon = <TabletIcon />;

            return (
              <ListItem key={device}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={device} secondary={`${visits} visits`} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
};

export default TrafficPage;
