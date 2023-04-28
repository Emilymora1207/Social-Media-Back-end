const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, match: '/^.{1,280}$/' },
    createdAt: { type: Date, default: Date.now },
    //***************reference the user that made this thought
    username: String
    // reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

// const reactionSchema = new mongoose.Schema({
//     reactionId: Schema.ObjectId,
//     reactionBody: { type: String, required: true, match: '/^.{0,280}$/'},
//     username: { type: String, required: true}, 
//     // ********************************need to use the getter method*****************
//     createdAt: { type: Date, default: Date.now },
// });

const handleError = (err) => console.error(err);

module.exports = Thought;