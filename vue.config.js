module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: 'localhost'
  },
  pwa: {
    name: 'Covid19 Malaysia',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    assetsVersion: '1.0',
    manifestOptions: {
      start_url: "https://covid19my.netlify.app/",
      display: "standalone"
    }
  }
};