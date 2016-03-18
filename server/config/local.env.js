'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://104.236.115.243:9000',
  SESSION_SECRET: 'gubiparking-secret',

  FACEBOOK_ID: '204789119884848',
  FACEBOOK_SECRET: 'ffd2b21501b2cc06702878bb1b559014',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
