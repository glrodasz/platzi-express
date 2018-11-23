const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("boom");
const bcrypt = require("bcrypt");
const MongoLib = require("../../../lib/mongo");

passport.use(
  new BasicStrategy(async function(username, password, cb) {
    const mongoDB = new MongoLib();

    try {
      const [user] = await mongoDB.getAll("users", { username });

      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);
