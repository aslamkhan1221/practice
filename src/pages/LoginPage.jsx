import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
  Paper,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "./logo.png"; // Update path to your logo

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email === "graphicon@gmail.com" && password === "gra123") {
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1c",
        display: "flex",
        p: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <img src={logo} alt="Logo" gap={1} mb={2} style={{ height: 30 }} />

          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
            Sign in
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email"
              placeholder="you@example.com"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="••••••••"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="hover"
                sx={{ fontSize: 14 }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(to right, #000000, #333333)",
                color: "#fff",
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
              }}
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
