module.exports = (api, options, rootOptions) => {
  if (options.agent === 'gitlab') {
    api.render('./gitlab_template')
  }

  if (options.agent === 'azure') {
    api.render('./azure_template', {
      appName: rootOptions.projectName.replace(' ', '')
    })
  }
}
