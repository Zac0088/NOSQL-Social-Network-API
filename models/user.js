const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max_length: 50
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter a valid Email Adress"]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought"

      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema
.virtual("friendCount")
.get(function(){
  return this.friends.length;
})

const user = model('user', userSchema);

module.exports = user;
