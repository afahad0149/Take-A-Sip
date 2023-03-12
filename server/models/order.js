const { model, Schema } = require('mongoose');
const foodSchema = require('./food');

const OrderSchema = new Schema({
  id: {
    type: Number,
  },
  user: {
    type: Object,
    required: true,
  },
  foods: {
    type: [foodSchema],
    required: true,
  },
  status: {
    type: String,
    default: 'created',
  },
  orderfor: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  deletedAt: {
    type: Date,
  },
});

const Order = model('Order', OrderSchema);

module.exports = Order;
