exports.loggedIn = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401); 
        res.json({'error': 'auth error'});
    }
}