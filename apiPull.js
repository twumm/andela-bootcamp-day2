#!/usr/bin/env node

'use strict';
const program = require('commander');
	exec = require('child_process').exec;

let listFunction = (weather,options) => {
const cmd = 'ls';
let params = [];
if (options.all) params.push('a');
if (options.long) params.push('l');
let fullCommand = params.length
				  ? cmd + ' -' + params.join('')
				  :cmd
if (directory) fullCommand += ' ' + directory;

let execCallback = (error, stdout, stderr) => {
	if (error) console.log("exec error: " + error);
	if (stdout) console.log("Result: " + stdout);
	if (stderr) console.log("shell error: " + stderr);
	};

exec(fullCommand, execCallback);

program
	.version('0.0.1')
	.command('list [weather]')
	.description('List the weather status of a city')
	.option('-a, --all','List all weather status of a city')
	.option('-l, --long', '')
	.action(listFunction);
	
program.parse(process.argv); 