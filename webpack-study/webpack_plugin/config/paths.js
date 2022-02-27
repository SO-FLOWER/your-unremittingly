//对文件根路径寻找的进行相应的配置

const path = require('path');
const appDir = process.cwd();
const resolveApp = (relativePath) => {
    return path.resolve(appDir, relativePath)
}

module.exports = resolveApp;