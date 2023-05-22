export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    "100": "#c6e4ff",
    "200": "#93cbff",
    "300": "#74abde",
    "400": "#6899c7",
    "500": "#5781a7",
    "600": "#4a6c8d",
    "700": "#3b5771",
    "800": "#324960",
    "900": "#243545",
  },
  secondary: {
    "50": "#fffefb",
    "100": "#fdf9e8",
    "200": "#f8eebb",
    "300": "#efe092",
    "400": "#dbcc86",
    "500": "#b4a86e",
    "600": "#908758",
    "700": "#706945",
    "800": "#544e33",
    "900": "#45412a",
  },
  tertiary: {
    // purple
    "100": "#e7dcf1",
    "200": "#d3bee5",
    "300": "#ba99d6",
    "400": "#ac84ce",
    "500": "#936db3",
    "600": "#7c5c97",
    "700": "#644a79",
    "800": "#543e66",
    "900": "#3d2d4a",
  },
  background: {
    light: "#181a1c",
    dark: "#181a1c",
    main: "#3d2d4a",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.dark,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
