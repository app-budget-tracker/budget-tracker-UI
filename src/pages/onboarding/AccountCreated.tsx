import { STRINGS } from "@/constants/strings";
import { Box, Button, Stack, Typography } from "@mui/material";
import loginImage from "@/assets/login_image.svg";
import logo from "@/assets/logo.svg";

const AccountCreated = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: 6,
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <img src={logo} alt="logo" width={100} />

          <Typography variant="h4" sx={{ textAlign: "center", mt: 10, px: 10 }}>
            {STRINGS.onboarding.accountCreated.title}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ textAlign: "center", px: 20 }}>
          {STRINGS.onboarding.accountCreated.description}
        </Typography>
        <Stack
          sx={{
            gap: 2,
            width: "100%",
            px: 24,
          }}
        >
          <Button variant="contained">
            {STRINGS.onboarding.accountCreated.continueButton}
          </Button>
          <Button variant="text">{STRINGS.common.buttons.skip}</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={loginImage}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default AccountCreated;
