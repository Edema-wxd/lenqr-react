import React from "react";
import { Stack, Container, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pablo from "../../assets/pablo.png";

function Signin() {
  return (
    <Container fixed>
      <Stack
        height={"100vh"}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={12}
      >
        <img src={pablo} alt="" />
        <div>
          <Typography variant="h2" color="textSecondary">
            Welcome
          </Typography>
          <p>Enter details to login.</p>
          <form action="">
            <Stack gap={2}>
              <TextField fullWidth type="email" label="Email" id="email" />
              <TextField
                fullWidth
                type="password"
                id="password"
                label="Password"
              />
              <Button
                variant="text"
                style={{
                  textTransform: "uppercase",
                }}
                color="secondary"
              >
                forgot password?
              </Button>
              <Link to="dashboard/main" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  style={{ textTransform: "uppercase" }}
                  size="large"
                  fullWidth
                  color="secondary"
                >
                  Submit
                </Button>
              </Link>
            </Stack>
          </form>
        </div>
      </Stack>
    </Container>
  );
}

export default Signin;
