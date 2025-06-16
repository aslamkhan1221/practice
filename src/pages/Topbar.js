import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1e1e1e" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="small" color="primary">
          Download
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
