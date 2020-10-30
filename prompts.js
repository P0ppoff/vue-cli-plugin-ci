const AGENTS = require('./agents.const');
const PACKAGE_MANAGERS = require("./packageManagers.const");

module.exports = [
  {
    type: 'list',
    name: 'packageManager',
    message: 'Which package manager do you use?',
    choices: [
      {name: 'Yarn', value: PACKAGE_MANAGERS.YARN},
      {name: 'NPM', value: PACKAGE_MANAGERS.NPM}
    ],
  },
  {
    type: 'list',
    name: 'agent',
    message: 'Which agent for your CI?',
    choices: [
      {name: 'GitLab', value: AGENTS.GITLAB_CI},
      {name: 'Azure DevOps', value: AGENTS.AZURE_PIPELINES},
      {name: 'CircleCI', value: AGENTS.CIRCLE_CI},
      {name: 'Github Actions', value: AGENTS.GITHUB_ACTIONS}
    ],
  },
];
