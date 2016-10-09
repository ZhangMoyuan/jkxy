var gulp = require('gulp'); //引入gulp

    sass = require('gulp-sass'), //sass编译

    minifyCss = require('gulp-minify-css'), //css压缩

    imagemin = require('gulp-imagemin'), //图片压缩

    uglify = require('gulp-uglify'), //js压缩

    rev = require('gulp-rev'), //添加MD5戳

    revCollector = require('gulp-rev-collector'), //路径替换

    htmlminify = require('gulp-html-minify'), //html文件压缩

    rename = require('gulp-rename'), //更换名称

    runSequence = require('gulp-sequence'), //按顺序执行

    clean = require('gulp-clean'); //清除以前的构建


gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rev()) //添加MD5戳
        .pipe(minifyCss()) //css压缩
        .pipe(gulp.dest('./build/css')) //编译后的css输出路径
        .pipe(rev.manifest()) //生成一个rev-manifest.json
        .pipe(gulp.dest('./build/rev/css')); //将 rev-manifest.json 保存到 rev 目录内
});


gulp.task('minjs', function() {
    return gulp.src('./js/*.js')
        .pipe(gulp.dest('./build/js'))

});


gulp.task('minimg', function() {
    return gulp.src(['./img/*.png', './img/*.jpg', './img/*.gif'])
        // .pipe(rev())
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
        .pipe(rev.manifest()) //生成一个rev-manifest.json
        .pipe(gulp.dest('./build/rev/img')); //将 rev-manifest.json 保存到 rev 目录内
});


gulp.task('rev', function() {
    gulp.src(['./build/rev/**/*.json', './index.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件                                  //- 执行文件内css名的替换
        .pipe(revCollector({
            replaceReved: true,
        }))
        .pipe(htmlminify({ //-html压缩
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('./build')); //- 替换后的文件输出的目录
});



gulp.task('build', function(cb) { // 按顺序执行完成后进行下一步
    runSequence('clean', ['minjs', 'sass', 'minimg'], 'rev', 'watch', cb);
});


gulp.task('clean', function() { //构建前清除以前的文件
    return gulp.src(['./build'], { read: false })
        .pipe(clean())
})


gulp.task('watch', function() { //在命令行执行：gulp watch，就可实现监听文件变化来自动编译
    gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['build'],function() {
    console.log('构建完成！');
});
