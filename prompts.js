const AGENTS = require('./agents.const');

module.exports = [
  {
    type: 'list',
    name: 'agent',
    message: 'Which agent for your CI?',
    choices: [
      { name: 'GitLab', value: AGENTS.GITLAB_CI },
      { name: 'Azure DevOps', value: AGENTS.AZURE_PIPELINES},
      { name: 'CircleCI', value: AGENTS.CIRCLE_CI}
    ],
  },
];
