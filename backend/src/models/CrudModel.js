const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const crudSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

crudSchema.plugin(mongoosePaginate);

// crudSchema.pre('save', function () {})

// crudSchema.pre('remove', function () {})

module.exports = mongoose.model('crud', crudSchema, 'crud');
