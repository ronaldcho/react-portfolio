// var axios = require('axios');
import axios from 'axios';

module.exports = {
  fetchTopicRepos: function (topic) {
    var encodedURL = window.encodeURI('https://github.com/search/q=topic:'+ topic + 'sdn+forks:>5+stars:>10+language:all');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      })
  }
}
