const router = require('express').Router();
const postRoutes = require('./userRoutes');
const commentRoutes = require('./thoughtsRoutes');

router.use('usersRoutes', userRoutes);
router.use('thoughtsRoutes', thoughtsRoutes);

module.exports = router;
