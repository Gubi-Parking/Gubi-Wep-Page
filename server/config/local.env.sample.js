'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'gubiparking-secret',

  FACEBOOK_ID: '547238145437093',
  FACEBOOK_SECRET: '6125e0d3648d670d6a99e14fb319d016',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
