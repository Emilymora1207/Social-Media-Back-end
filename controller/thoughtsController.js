const { User, Thought } = require('../models');


// .sort({createdAt: -1})
module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that id' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought 
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'please add data to create thought' });
      }

      res.json({ message: 'thought created' });
    } catch (err) {
      console.error(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

// ****************************firgute out how to find the reaction withithn a thought 
  async createReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId}, 
        { $push: {reactions: req.body}},
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res
          .status(404)
          .json({ message: 'please add data to create reaction' });
      }

      res.json({ message: 'reaction created' });
    } catch (err) {
      console.error(err);
    }
  },  
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {$pull: {reactions: {_id: req.params.reactionId}}});

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with this id!' });
      }

      res.json({ message: 'Reaction deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
