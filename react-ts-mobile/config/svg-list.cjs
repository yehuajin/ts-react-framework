const fs = require('fs');
const path = require('path');
// 文件根路径
const root = `src${path.sep}assets`;
const svgfile = `${root}${path.sep}svg.json`;

const iconList = [];
(function loadIcons(dir, list) {
  const iconFiles = fs.readdirSync(dir);
  iconFiles.forEach((file) => {
    list.push(file.replace('.svg', ''));
  });
})(`${root}${path.sep}svg`, iconList);

fs.writeFile(svgfile, JSON.stringify(iconList, null, 2), () => {
  console.log('写入icon列表文件成功!');
});
