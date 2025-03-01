<p align="center">
  <img alt="Cat Gif" src="https://github.com/parthiv13/treat/blob/master/assets/brand.jpeg">
</p>

# Action Cats

- _Featured by [GitHub](https://github.blog/2020-04-09-featured-actions-from-the-github-actions-hackathon/)_

This is a simple Github Action which comments on your PRs with a cat gif as a reward for pushing some code.

This is just a novelty action, but feel free to use it. If you'd like to contribute then just open a PR.

## Usage

```yaml          
name: Cats 😺

on:
  pull_request_target:
    types:
      - opened
      - reopened

jobs:
  aCatForCreatingThePullRequest:
    name: A treat for your effort!
    runs-on: ubuntu-latest
    steps:
      - uses: parthiv13/treat@final
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


[def]: https://github.com/parthiv13/treat/blob/master/assets/1.gi