const mongoose = require('mongoose');

const MyRouteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('MyRoute', MyRouteSchema, 'MyRoute');
