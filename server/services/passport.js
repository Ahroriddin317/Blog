import passportJWT from 'passport-jwt'
import mySqlService from './mySqlServer'
import config from '../config'

const cookieExtractor = (req) => {
  return req && req.cookies && req.cookies.token
}

const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([cookieExtractor])
}

const jwtStrategy = new passportJWT.Strategy(jwtOptions, (jwtPayload, done) => {

  const query = `SELECT * FROM users WHERE id = ${jwtPayload.uid}`
  mySqlService.query(query, (err, user) => {
    if (err) {
      return done(err, null)
    }

    if (user) {
      return done(null, user)
    }

    return done(null, false)
  })
})

exports.jwt = jwtStrategy
