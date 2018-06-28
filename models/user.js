/**
 * Created by monty.ma on 2018/6/28.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  meta: {
    creatTime: {
      type: Date,
      default: Date.now()
    }
  }
});

module.exports = mongoose.model('User', UserSchema);