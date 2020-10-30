const AGENTS = require('../agents.const');

module.exports = (api, options, rootOptions) => {
  const commands = {
    install: 'yarn',
    lint: 'yarn lint',
    test: 'yarn test:unit',
    build: 'yarn build'
  };

  const mapAgentConfigFile = {
    [AGENTS.AZURE_PIPELINES]: "./azure_template",
    [AGENTS.GITLAB_CI]: "./gitlab_template",
    [AGENTS.CIRCLE_CI]: "./circle_template",
    [AGENTS.GITHUB_ACTIONS]: "./github_template"
  };

  api.render(
    mapAgentConfigFile[options.agent],
    commands
  );
};
