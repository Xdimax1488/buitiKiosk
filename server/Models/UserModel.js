import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  emil: {
    type: String,
    require: true,
    uniqu: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false,
  }
},
{
    timestamps: true
});

const User = mongoose.model('User',userSchema)

export default User;
