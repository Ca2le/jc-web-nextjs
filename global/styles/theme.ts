// and extend them!
interface ITheme {
    readonly fonts_thick: string
    readonly fonts_prime: string
    readonly fonts_second: string;
    readonly font_weights: { thin: string, thick: string, black: string };
    readonly hexcolors: {
        readonly dark: string;
        readonly ice: string;
        readonly mint: string;
        readonly lemon: string;
        readonly rasberry: string;
        readonly grape: string;
        readonly showroom: string;
    }
}

const theme = {
    fonts_thick: '\'Noto Sans\', sans-serif;',
    fonts_prime: '\'Playfair Display\', serif;',
    fonts_second: '\'Source Sans Pro\', sans-serif;',
    font_weights: { thin: '300', thick: '700', black: '900' },
    hexcolors: {
        dark: '#1a1a1a',
        ice: '#f1fffb',
        mint: '#72ffd4',
        lemon: '#e3ff71',
        rasberry: '#ff719c',
        grape: '#8d71ff',
        showroom: '#F2F2F2'
    }
} as ITheme

export default theme