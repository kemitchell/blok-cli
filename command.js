#!/usr/bin/env node

if (process.argv.length < 3) {
  console.error('Usage: ')
  process.exit(1) }

var subcommand = process.argv[2]

if (subcommand === 'put') { require('./put')() }
else if (subcommand === 'get') { require('./get')() }
else if (subcommand === 'list') { require('./list')() }
