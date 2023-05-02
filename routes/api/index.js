const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

// router.use('usersRoutes', userRoutes);
// router.use('thoughtsRoutes', thoughtsRoutes);

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
