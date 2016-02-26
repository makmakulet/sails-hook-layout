/**
 * sails-hook-layout
 *
 */

module.exports = Layout;
var path = require("path");
var sailsLayout = require(path.join(__dirname, "lib", "sails-layout"));

function Layout(sails) {
  return {
    routes: {
      before: {
        "all /*": sailsLayout
      }
    }
  };
}