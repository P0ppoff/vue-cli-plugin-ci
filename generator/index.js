const AGENTS = require('../agents.const');
const PACKAGE_MANAGERS = require("../packageManagers.const");

module.exports = (api, options, rootOptions) => {
  const commands = {
    [PACKAGE_MANAGERS.YARN]: {
      install: 'yarn',
      lint: 'yarn lint',
      test: 'yarn test:unit',
      build: 'yarn build'
    },
    [PACKAGE_MANAGERS.NPM]: {
      install: 'npm ci',
      lint: 'npm run lint',
      test: 'npm run test:unit',
      build: 'npm run build'
    }
  };

  const mapAgentConfigFile = {
    [AGENTS.AZURE_PIPELINES]: "./azure_template",
    [AGENTS.GITLAB_CI]: "./gitlab_template",
    [AGENTS.CIRCLE_CI]: "./circle_template",
    [AGENTS.GITHUB_ACTIONS]: "./github_template"
  };

  api.render(
    mapAgentConfigFile[options.agent],
    commands[options.packageManager]
  );
};
