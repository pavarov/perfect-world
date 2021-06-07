import {createMuiTheme} from "@material-ui/core/styles";
import {comfortaaRegular, comfortaaBold, comfortaaLight} from "../fonts/Font";


const themeLight = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            default: "rgba(222,226,229,0.5)"
        },
        text: {
            primary: "#000000",
            align: 'justify'
        }
    },
    typography: {
        fontFamily: 'Comfortaa',
        body1: {
            fontWeight: 400
        },
        h1: {
            fontSize: 32,
            fontWeight: 700,
            color: '#444'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [comfortaaLight, comfortaaRegular, comfortaaBold],
            },
        },
    },
});

export default themeLight;