const db = require('../config/connection');
const { User, Box } = require('../models');
const userSeeds = require('./userSeeds.json');
const boxSeeds = require('./boxSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
  try {
    await Box.deleteMany({});
    await Box.create(boxSeeds);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
