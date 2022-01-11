module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '438e8a585a4c20daea75ada687666337'),
  },
});
