const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    consumedFoods: {
      type: [{
        foodItem: String
      }],
      default: []
    }
  }
);

const Credentials = mongoose.model('User', credentialsSchema, 'Credentials');

module.exports = { Credentials };
