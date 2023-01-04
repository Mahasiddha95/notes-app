const GithubClient = require('./githubClient'); // import the GithubClient class

class Github {
  constructor(client) {
    this.client = client;
    this.repoData = null;
  }

  fetch(repo) {
    this.client.fetchRepositoryData(repo, (data) => {
      this.repoData = data;
    });
  }

  getRepoData() {
    return this.repoData;
  }
}

const client = new GithubClient();
const github = new Github(client);

github.fetch('sinatra/sinatra');

// After a few moments, this should return a JS object with the repo information.
console.log(github.getRepoData());
