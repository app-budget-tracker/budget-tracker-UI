import { STRINGS } from "@/constants/strings";
import { Button, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo.svg";
import LoginLayout from "./LoginLayout";

const AccountCreated = () => {
  return (
    <LoginLayout>
      <Stack sx={{ alignItems: "center" }}>
        <img src={logo} alt="logo" width={100} />

        <Typography variant="h4" sx={{ textAlign: "center", mt: 10 }}>
          {STRINGS.onboarding.accountCreated.title}
        </Typography>
      </Stack>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {STRINGS.onboarding.accountCreated.description}
      </Typography>
      <Stack
        sx={{
          gap: 2,
          width: "60%",
        }}
      >
        <Button variant="contained">
          {STRINGS.onboarding.accountCreated.continueButton}
        </Button>
        <Button variant="text">{STRINGS.common.buttons.skip}</Button>
      </Stack>
    </LoginLayout>
  );
};

export default AccountCreated;
