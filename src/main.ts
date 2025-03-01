import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  const gifs = [
    'https://github.com/parthiv13/treat/blob/master/assets/1.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/2.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/3.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/4.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/5.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/6.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/7.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/8.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/9.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/10.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/11.gif'
  ];
  try {
    const randomCatGif = gifs[Math.floor(Math.random() * gifs.length)]
    const message = `![Gif](${randomCatGif})`
    const githubToken = core.getInput('GITHUB_TOKEN')

    const context = github.context
    if (context.payload.pull_request == null) {
      core.setFailed('No pull request found.')
      return
    }
    const pullRequestNumber = context.payload.pull_request.number

    const octokit = new github.GitHub(githubToken)

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message
    })
  } catch (error) {
    core.setFailed("Failed")
  }
}

run()
