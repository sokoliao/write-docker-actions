const core = require("@actions/core");
const github = require("@actions/github");

const run = async function() {
    const fact = core.getInput("fact");
    const token = core.getInput("repoToken");
    const title = core.getInput("issueTitle") ?? "Default title";
    try {
        const octokit = new github.Github(token);
        const issue = await octokit.rest.issues.create({
            ...github.context,
            title: title,
            body: fact
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();