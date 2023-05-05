const { error } = require('console');
const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const Users = await User.find();
      res.json(Users);
      console.log(req);

    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user found with that id' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a comment
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      if (!user) {
        return res
          .status(404)
          .json({ message: 'please add data to create user' });
      }

      res.json({ message: 'user created' });
    } catch (err) {
      console.error(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
    
      // const thoughts = await Thought.find({ user.username: req.params.userId })
    //   const thoughts = await Thought.findAllAndUpdate(
    //     { User: req.params.userId },
    //     { $pull: { videos: req.params.videoId } },
    //     { new: true }
    //   );

    //   if (!user) {
    //     return res
    //       .status(404)
    //       .json({ message: 'Video created but no user with this id!' });
    //   }

      res.json({ message: 'Video User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: {friends: req.params.friendId} },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      // res.json({ message: 'Friend added!'})
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$pull: {friends: req.params.friendId}} 
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json({ message: 'Friend removed!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
