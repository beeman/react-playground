const axios = require('axios')

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

var helpers = {
  getGithubInfo: (username) => axios.all([
      getRepos(username),
      getUserInfo(username)
    ])
    .then((arr) => ({
      repos: arr[0].data,
      bio: arr[1].data,
    }))
    .catch(err => {
      console.error(err)
    })
}

module.exports = helpers