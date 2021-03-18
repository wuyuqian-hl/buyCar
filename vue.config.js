module.exports = {
  devServer: {
    //配置代理跨域  固定写法
    proxy: {
      //  ‘’中间指的是那些请求会触发代理跨域，/ 代表任意请求都会触发
      '/': {
        //target代表的是代理地址，我们要请求的代理地址
        target: 'http://mkerp.zgcw.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/':''
        }
      }
    }
  }
}