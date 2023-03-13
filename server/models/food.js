const { model, Schema } = require('mongoose');
const flavorSchema = require('./flavors');

const foodSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
  flavors: {
    type: [flavorSchema],
    required: true,
  },
  selectedFlavor: {
    type: String,
  },
  qty: {
    type: Number,
    default: 1,
  },
  note: {
    type: String,
    default: ''
  }
})

const Food = model('FoodType', foodSchema);

module.exports = { Food, foodSchema};
