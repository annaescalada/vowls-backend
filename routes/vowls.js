// router.post('/matches/:matchID/delete', isNotLoggedIn, isMatchIdValid, async (req, res, next) => {
//   try {
//     const { matchID } = req.params;
//     if (!ObjectId.isValid(matchID)) {
//       next();
//     }
//     const match = await Match.findById(matchID);
//     if (!match) {
//       next();
//     }
//     await Match.findByIdAndDelete(matchID);
//     res.json({ message: 'Match deleted' });
//   } catch (error) {
//     next(error);
//   }
// });