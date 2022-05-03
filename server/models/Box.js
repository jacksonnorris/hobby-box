const { Schema, model } = require('mongoose');


const pastBoxSchema = new Schema(
  {
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    tier: [String],
    frequency : [Number],
  }
);

const boxSchema = new Schema(
  {
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    tier: [String],
    pastBox : [pastBoxSchema],
    frequency : [Number],
  }
);

const Box = model('Box', boxSchema);

module.exports = Box;
