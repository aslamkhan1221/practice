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

const integrations = [
  { id: 1, name: "Google Analytics", status: "Connected" },
  { id: 2, name: "Stripe", status: "Disconnected" },
  { id: 3, name: "Mailchimp", status: "Connected" },
];

const IntegrationsPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Integrations
      </Typography>
      <Typography mb={2}>
        Manage third-party app integrations and connections.
      </Typography>

      <Paper>
        <List>
          {integrations.map(({ id, name, status }) => (
            <ListItem
              key={id}
              secondaryAction={
                <Button
                  variant={status === "Connected" ? "outlined" : "contained"}
                >
                  {status === "Connected" ? "Disconnect" : "Connect"}
                </Button>
              }
            >
              <ListItemText primary={name} secondary={`Status: ${status}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default IntegrationsPage;
