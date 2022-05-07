const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = new Schema(
  {
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Box'
      }
    ],
    orderConfirmation: {
      type: String,
      default: uuidv4(),
    },
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;
