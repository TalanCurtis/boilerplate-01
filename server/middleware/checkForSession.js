module.exports = function (req, res, next) {
  if (!req.session.user) {
      req.session.user ={
          // fill in a fake user data that mimic real user for quick testing
          id: 1,
          user_name: "Fake Name",
          img: 'fake.',
          auth_id: 'fake',
          eye_color: 'brown',
          hair_color: 'brown',
          age: 33
      }
  }
  next()
}