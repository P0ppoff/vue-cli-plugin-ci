const AGENTS = require('../agents.const');

module.exports = (api, options, rootOptions) => {
  if (options.agent === AGENTS.GITLAB_CI) {
    api.render('./gitlab_template')
  }

  if (options.agent === AGENTS.AZURE_PIPELINES) {
    api.render('./azure_template')
  }

  if (options.agent === AGENTS.CIRCLE_CI) {
    api.render('./circle_template')
  }

  if(options.agent === AGENTS.GITHUB_ACTIONS) {
    api.render('./github_template')
  }
};
