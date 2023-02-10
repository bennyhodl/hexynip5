const {bech32} = require('bech32')

function npubToHex(npub) {
  const { prefix, words } = bech32.decode(npub);
  if (prefix === 'npub') {
    const bytes = bech32.fromWords(words).slice(0, 32);
    const pubkey = Buffer.from(bytes).toString('hex');
    return console.log(pubkey)
  }
  throw new Error('not an npub key');
}

module.exports = npubToHex