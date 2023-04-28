const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    //******************add email validator */
    email: { type: String, unique: true, required: true, match: ['\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b', 'Please enter a valid email'] },
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought'}],
    //i dont think this is right*************
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;




// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
// User.find({})
//     .exec()
//     .then(async collection => {
//         if (collection.length === 0) {
//             const results = await Department.insertMany(
//                 [
//                     { name: 'Produce' },
//                     { name: 'Dairy' },
//                     { name: 'Meat' },
//                     { name: 'Wine' },
//                     { name: 'Wine' },
//                     { name: 'Wine' },
//                     { name: 'Flowers' },
//                 ]
//             );
//             return console.log('Departments inserted', results);
//         }
//         return console.log('Already populated');
//     })
//     .catch(err => handleError(err));


