// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('colors');

colors.setTheme({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'cyan',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'rainbow',
});

const setStringColor = (text: string, level: string): string => {
    switch (level) {
        case 'error':
            return colors.error(text)
            
        case 'warn':
            return colors.warn(text)

        case 'info':
            return colors.info(text)

        case 'http':
            return colors.http(text)
            
        case 'verbose':
            return colors.verbose(text)

        case 'debug':
            return colors.debug(text)

        case 'silly':

    }
    return text;
}

export default setStringColor