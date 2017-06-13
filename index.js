const urlLoader = require('url-loader');
const sizeOf = require('image-size');

module.exports = function(source) {
  const loadedImg = urlLoader.call(this, source);
  const cleanedImg = loadedImg.replace(/^module.exports = /, '').replace(/;$/, '');
  var dimensions = sizeOf(this.resourcePath);

  return `module.exports = {
    __esModule: { value: true },
    default: ${cleanedImg},
    width: ${dimensions.width},
    height: ${dimensions.height}
  }`;
};
