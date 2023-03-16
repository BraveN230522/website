const withImages = require('next-images');
require('dotenv').config();

module.exports = withImages({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GQL_APIPREFIX: process.env.GQL_APIPREFIX,
    GQL_PORT: process.env.GQL_PORT,
    GQL_SERVER_URL: process.env.GQL_SERVER_URL,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
    PUNCHOUT_BASE_URL: process.env.PUNCHOUT_BASE_URL,
  },
});
