import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
            main: '#e0e0e0',
            dark: '#212121',
            contrastText: '#fff',
        },
        secondary: {
            light: '#bbdefb',
            main: '#42a5f5',
            dark: '#0d47a1',
            contrastText: '#000',
        },
    },
});