module.exports = {
  ensureLoggedIn: () => {
    (req, res, next) => {
      req.user.session ? next() : res.redirect('/')
    }
  },
  ensureLoggedOut: () => {
    (req, res, next) => {
      req.user.session ? res.redirect('/') : next()
    }
  }
}