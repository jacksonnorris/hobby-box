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
    value: [String],
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
    value: [String],
    frequency : [Number],
    pastBox : [pastBoxSchema]
  }
);

const Box = model('Box', boxSchema);

module.exports = Box;
