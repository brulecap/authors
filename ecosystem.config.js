module.exports = {
  apps : [{
    name   : "authors",
    script : "./server.js",
    env: {"PORT": 8081, "BASE":"http://www.brucelecaptain.com/authors/"}
  }]
}