const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
      get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;