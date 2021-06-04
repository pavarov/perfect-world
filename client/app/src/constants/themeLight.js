import {createMuiTheme} from "@material-ui/core/styles";

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
    }
});

export default themeLight;