const { connect, connection } = require('mongoose');

connect('mongodb:// .0.0.1:27017/SocialMediaDB');

module.exports = connection;
