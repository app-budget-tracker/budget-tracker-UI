import { Box } from "@mui/material";
import loginImage from "@/assets/login_image.svg";
import { SCREEN_MIN_WIDTH, SCREEN_WIDTH, sizes } from "@/constants/sizes";

interface LoginLayoutProps {
  children: React.ReactNode;
}
const LoginLayout = ({ children }: LoginLayoutProps) => {
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
          height: "100%",
          width: sizes.loginLayout.sectionWidth,
          minWidth: sizes.loginLayout.sectionMinWidth,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: 6,
          px: sizes.loginLayout.sectionPaddingX,
        }}
      >
        {children}
      </Box>
      {SCREEN_WIDTH > SCREEN_MIN_WIDTH && (
        <Box
          sx={{
            height: "100%",
            width: sizes.loginLayout.sectionWidth,
            minWidth: sizes.loginLayout.sectionMinWidth,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
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
      )}
    </Box>
  );
};

export default LoginLayout;
