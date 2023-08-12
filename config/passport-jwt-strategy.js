const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt; // Corrected import

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // Corrected method name
    secretOrKey: 'codeial'
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){ // Corrected class name
    User.findById(jwtPayload._id, function(err, user){
        if(err) {
            console.log('Error in finding user from JWT');
            return done(err, false);
        }

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;