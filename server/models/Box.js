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
  }
);

const boxSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: [Number],
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
    pastBox: [pastBoxSchema],
    frequency: [Number],
  }
);

const Box = model('Box', boxSchema);

module.exports = Box;
