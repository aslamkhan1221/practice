import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const SignupPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #1c1c1c, #2e2e2e, #1c1c1c)",
        backgroundSize: "400% 400%",
        animation: "gradient 12s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        "@keyframes gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff" }}
        >
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <img src={logo} alt="Sitemark Logo" style={{ height: 30 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
            ></Typography>
          </Box>

          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
            Sign up
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Full Name"
              placeholder="Jon Snow"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email"
              placeholder="your@email.com"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              placeholder="••••••••"
              variant="outlined"
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I want to receive updates via email."
            />

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
            >
              Sign up
            </Button>

            <Divider sx={{ my: 1 }}>or</Divider>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ textTransform: "none" }}
            >
              Sign up with Google
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              sx={{ textTransform: "none" }}
            >
              Sign up with Facebook
            </Button>
          </Stack>

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#1976d2",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignupPage;
