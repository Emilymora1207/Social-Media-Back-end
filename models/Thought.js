const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Schema.ObjectId,
    reactionBody: { type: String, required: true, match: /^.{0,280}$/},
    username: { type: String, required: true}, 
    // ********************************need to use the getter method*****************
    createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, match: /^.{1,280}$/ },
    createdAt: { type: Date, default: Date.now },
    username: String,
    reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);



const handleError = (err) => console.error(err);

module.exports = Thought;