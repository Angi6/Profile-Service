//connect to MongoDB
const mongoose = require('mongoose');

//Create Schema
const ProfileDataSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  prename: String,
  roles: String,
  skills: [String],
  socialnetworks: [String],
  company: String,
  os: String,
  profileImage: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1585643114/ProfileService/lbjytgmsbisjfjfmcya4.png'
  },
  description: String
}, {
  versionKey: false // No automatic version key will be generated
});


//Create model of Schema
var ProfileData = mongoose.model('UserData', ProfileDataSchema);
module.exports = ProfileData;