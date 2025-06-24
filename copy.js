const fs = require('fs')
const path = require('path')

const distIndex = path.resolve(__dirname, './dist/index.html')
const rootIndex = path.resolve(__dirname, './index.html')

// 将 dist/index.html 拷贝到根目录
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex)
}

// 反向：确保部署产物中也包含根 index.html（静态托管入口）
if (fs.existsSync(rootIndex)) {
  fs.copyFileSync(rootIndex, distIndex)
}


// console.warn('请检查付费插件是否启用！！！')
