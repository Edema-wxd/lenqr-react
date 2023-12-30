import React from "react";
import { Stack, Container, TextField, Button } from "@mui/material";
import {useNavigate} from "react-router-dom"

function Signin() {
    const navigate  = useNavigate()
  return (
    <Container>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <img src="" alt="" />
        <div>
          <h2>Welcome</h2>
          <p>Enter details to login.</p>
          <form action="">
            <Stack>
              <TextField
                fullWidth
                type="email"
                id="email"
                placeholder="Email"
              />
              <TextField
                fullWidth
                type="password"
                id="password"
                placeholder="Password"
              />
              <Button variant="text" style={{ textTransform: "capitalize" }}>
                forgot password?
              </Button>
              <Button
                variant="contained"
                style={{ textTransform: "capitalize" }}
                size="large"
                onClick={navigate("dashboard/main")}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </Stack>
    </Container>
  );
}

export default Signin;
