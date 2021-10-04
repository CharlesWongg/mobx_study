const {
    override,
    fixBabelImports,
    addBabelPreset,
    addDecoratorsLegacy,
  } = require("customize-cra");
  
  module.exports = override(
    fixBabelImports("import", {
      //antd按需加载
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css"
    }),   
    addDecoratorsLegacy(), //配置装饰器
  );