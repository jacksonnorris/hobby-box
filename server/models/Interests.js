const { Schema, model } = require('mongoose');

const userSchema = require('./User');
const boxSchema = require('./Box');

const interestSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    users: [userSchema],
    boxes: [boxSchema]
  }
);

const Interest = model('Interest', interestSchema);

module.exports = Interest;
