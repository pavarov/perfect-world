import {createMuiTheme} from "@material-ui/core/styles";
import {exo_2Bold, exo_2Light, exo_2Regular} from "../fonts/Font";


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
        fontFamily: 'Exo_2',
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
                '@font-face': [exo_2Regular, exo_2Bold, exo_2Light],
            },
        },
    },
});

export default themeLight;