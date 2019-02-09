module.exports = [
  {
    type: 'list',
    name: 'agent',
    message: 'Which agent for your CI?',
    choices: [
      { name: 'GitLab', value: 'gitlab' },
      { name: 'Azure DevOps', value: 'azure'}
    ],
  },
]