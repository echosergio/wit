require = require('esm')(module);

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from './lib/inquirer';
require('./lib/cli').cli(process.argv);

clear();
console.log(chalk.yellow(figlet.textSync('wit', { horizontalLayout: 'full' })));

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};
