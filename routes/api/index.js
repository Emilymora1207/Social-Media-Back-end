const router = require('express').Router();
const postRoutes = require('./userRoutes');
const commentRoutes = require('./thoughtsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
