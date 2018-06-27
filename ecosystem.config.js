module.exports = {
  apps : [{
    name   : "authors",
    script : "./server.js",
    env: {"PORT": 4200, "BASE":"http://www.brucelecaptain.com/authors/"}
  }]
}