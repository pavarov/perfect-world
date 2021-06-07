import pathRegular from './Exo_2/static/Exo2-Regular.ttf'
import pathBold from './Exo_2/static/Exo2-Bold.ttf'
import pathLight from './Exo_2/static/Exo2-Light.ttf'

class Font {
    constructor(fname, fstyle, fweight, furl) {
        this.fname = fname;
        this.fstyle = fstyle;
        this.fweight = fweight;
        this.furl = furl;

        return {
            fontFamily: this.fname,
            fontStyle: this.fstyle,
            fontDisplay: 'swap',
            fontWeight: this.fweight,
            src: `
                local(${this.fname}),
                url(${this.furl}) format('woff2')
            `,
            unicodeRange:
                'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
    }
}

const exo_2Light = new Font('Exo_2', 'normal', 300, pathLight);
const exo_2Regular = new Font('Exo_2', 'normal', 400, pathRegular);
const exo_2Bold = new Font('Exo_2', 'normal', 700, pathBold);

export {
    exo_2Regular,
    exo_2Bold,
    exo_2Light
}
