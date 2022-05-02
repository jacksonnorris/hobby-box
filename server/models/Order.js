const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    price: {
      type: Number,
      required: true
    },
    box: {
      type: Schema.Types.ObjectId,
      ref: 'Box'
    }
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;
