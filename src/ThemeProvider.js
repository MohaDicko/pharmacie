import { createTheme } from "@mui/material/styles";
import { lime } from "@mui/material/colors";

const myCustomColors = {
    primary: "#112D4E",
    secondary: "#DBE2EF",
    white: "#F9F7F7",
    one: "#F9F7F7",
    two: "#DBE2EF",
    three: "#3F72AF",
    four: "#112D4E",
    five: "#E1E5EE",
};

export const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
      },
    palette: {
        primary: {
            main: myCustomColors.two,
        },
        secondary: {
            main: myCustomColors.secondary,
        },

        white: {
            main: myCustomColors.white,
        },
        lime: {
            main: lime[500],
        },

        one: {
            main: myCustomColors.one,
        },
        two: {
            main: myCustomColors.two,
        },
        three: {
            main: myCustomColors.three,
        },
        four: {
            main: myCustomColors.four,
        },

        five: {
            main: myCustomColors.five,
        },

    },
});