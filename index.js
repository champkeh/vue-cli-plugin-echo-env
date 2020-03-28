const chalk = require('chalk');
let _prefix = 'VUE_APP_';

module.exports = (api, projectOptions) => {
    api.registerCommand('echo-env', args => {
        // 获取要检查的变量前缀，默认为 VUE_APP_ (客户端变量)
        _prefix = args.prefix || _prefix;

        console.log(`current prefix: ${chalk.red(_prefix)}\n`);

        const varNames = Object.keys(process.env).filter(name => name.startsWith(_prefix));
        if (varNames.length === 0) {
            console.log(chalk.red('Not matched any env variables!'));
        }
        const maxLength = Math.max(...varNames.map(name => name.length));
        const result = varNames.map(name => ({ name, value: process.env[name] }));
        result.forEach(({ name, value }) => {
            formatEntry(name, maxLength + 4, value)
        })
    })
};

function formatEntry (name, maxLength, value) {
    console.log(`${colorName(pad(name, maxLength))}${colorValue(value)}`)
}

function pad (val, maxLength, char = ' ') {
    if (val.length >= maxLength) {
        return val
    }
    return val + char.repeat(maxLength - val.length)
}

function colorName (name) {
    return chalk.red(name.substr(0, _prefix.length)) + chalk.cyan(name.substr(_prefix.length))
}

function colorValue (value) {
    return chalk.green(value)
}
