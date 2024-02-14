export const SCREEN_WIDTH = window.screen.width;
export const SCREEN_HEIGHT = window.screen.height;

export const SCREEN_MIN_WIDTH = 1024;

export const sizes = {
  loginLayout: {
    sectionWidth: SCREEN_WIDTH <= SCREEN_MIN_WIDTH ? "100%" : "50%",
    sectionMinWidth:
      SCREEN_WIDTH > SCREEN_MIN_WIDTH ? SCREEN_MIN_WIDTH / 2 : null,
    sectionPaddingX: SCREEN_WIDTH <= SCREEN_MIN_WIDTH ? 4 : 10,
  },
};
