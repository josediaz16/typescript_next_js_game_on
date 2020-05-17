const { createDB } = require('./dbManager');

const nodeEnv = process.argv[2] || process.env.NODE_ENV || 'development';

createDB(nodeEnv);
