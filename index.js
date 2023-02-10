#! /usr/bin/env node
const { Command } = require('commander');
const npubToHex = require('./hexynip')

const program = new Command();

program
  .name('nip5')
  .description('Get the hex from a nostr pubkey.')
  .version('0.0.1');

program.command('hex')
  .description('npub to convert to hext')
  .argument('<string>', 'string to split')
  .action((npub) => npubToHex(npub));

program.parse();
