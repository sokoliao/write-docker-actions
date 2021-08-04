const core = require("@actions/core");
const github = require("@actions/github");

const fact = core.getInput("fact");
const token = core.getInput("repoToken");
const title = core.getInput("issueTitle") ?? "Default title";

const octokit = github.getOctokit(token);
octokit.rest.issues.create({
    ...github.context,
    title: title,
    body: fact
});
