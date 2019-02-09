module.exports = (api, options, rootOptions) => {
  if (options.agent === 'gitlab') {
    api.render('./gitlab_template')
  }
}
