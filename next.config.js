const withTM = require("next-transpile-modules")(["recoil"]);

module.exports = withTM({
  basePath: process.env.BASE_PATH,
});
