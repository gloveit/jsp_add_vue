module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    },
    port: 8080
  },
  productionSourceMap: false,
  lintOnSave:false,   //配置关闭eslint
  css: {
    extract: false
  }
}
