import express from 'express';
import session from 'express-session';
import passport from 'passport';
import {strategy} from 'passport-facebook';

const app = express();

/**********************************************************************/
/*                           Passport oAuth                           */
/**********************************************************************/

// // Sets up passport and configures sessions on the applications.
// app.use(session({
//   secret: 'lando',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// ///// I think this is for storing users in a database. Probs not used.
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(id, done) {
//   done(null, id);
// });

// // Creates an oAuth strategy to connect with optimis CAS. Not sure about
// // the callback function.
// passport.use(new strategy({
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_SECRET,
//     callbackURL: "/auth/facebook"
//   }, (token, refreshToken, profile, done) => {
//     return done(null, token);
//   })
// );

/**********************************************************************/
/*                               Routes                               */
/**********************************************************************/

// app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));

////////////////////////////////////////////////////////////////////////

// Serve application file depending on environment
app.get('/app.js', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

// Serve aggregate stylesheet depending on environment
app.get('/style.css', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/style.css');
  } else {
    res.redirect('//localhost:9090/build/style.css');
  }
});

// Serve index page
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

////////////////////////////////////////////////////////////////////////

if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Ready to venture ... us', host, port);
});
