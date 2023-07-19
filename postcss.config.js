module.exports = {
  plugins: {
    'postcss-pxtorem': {
      //根元素字体大小
      rootValue: 16,
      //匹配CSS中的属性，* 代表启用所有属性
      propList: ['*'],
      //转换成rem后保留的小数点位数
      unitPrecision: 5,
      //小于12px的样式不被替换成rem
      minPixelValue: 12,
      exclude: ['node_modules']
    }
  }
}
