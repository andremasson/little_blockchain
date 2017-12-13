const blockchain = require('./blockchain')

blockchain.initBlockchain()
blockchain.addNewBlock('First new block')
blockchain.addNewBlock('Loving blockchain')
blockchain.addNewBlock('Make me a new hash!')

console.log(blockchain.getAllBlocks())
