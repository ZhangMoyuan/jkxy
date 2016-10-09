//定义加载路径
fis.match('*.{jpg,png,js,css}', {
  release: '/static/$0'
});

// 加 md5
fis.match('*.{js,css,png,jpg}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  // 查找css内部带 ? __sprite文件
  spriter: fis.plugin('csssprites')
});

// 压缩资源
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
  // fis-optimizer-html-minifier 插件进行压缩，已内置
  optimizer: fis.plugin('html-minifier')
});


fis.config.set('modules.postpackager','simple');


// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


fis.match('/css/*.css', {
    //发布到/static/css/目录下
    release: '/static/css/aio.css',
});
fis.match('*.png', {
    //发布到/static/img/目录下
    release: '/static/img/all.png',
});

fis.match('/js/*.js', {
    //发布到/static/js/目录下
    release: '/static/js/lib.js',
});