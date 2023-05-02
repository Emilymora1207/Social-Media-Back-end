const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought, 
  deleteThought, 
  createReaction, 
  deleteReaction
} = require('../../controller/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;
