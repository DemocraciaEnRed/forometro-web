export default ({ app, $config }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('strapiAsset', path => `${$config.strapiURL}${path}`)
}
