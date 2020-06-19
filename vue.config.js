module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: 'localhost'
  },
  pwa: {
    name: 'Covid19 Malaysia',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
};