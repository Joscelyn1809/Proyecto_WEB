import passport from 'passport';
import passportJWT from 'passport-jwt'

const ExtractJwt = passportJWT.ExtractJwt;
const StrategyJWT = passportJWT.Strategy;

passport.use(
    new StrategyJWT({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'drhgsjdjdf1234',
    }, (jwtPayload, done) => {
        return done(null, jwtPayload.email)
    })
)