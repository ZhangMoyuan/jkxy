var gulp = require('gulp');			//引入gulp
var minifyCss = require('gulp-minify-css');		//css压缩
var uglify = require('gulp-uglify');			//js压缩
 imagemin = require('gulp-imagemin');			//图片压缩
var htmlminify = require('gulp-minify-html');		//html压缩
var concat = require('gulp-concat'); //合并
var rev = require('gulp-rev'); //文件名加MD5后缀
var rename = require('gulp-rename'); //重命名
var revCollector = require('gulp-rev-collector'); //替换静态资源的引用路径
var runSequence = require('gulp-sequence'); //按顺序执行
var clean = require('gulp-clean'); //清除以前的构建

gulp.task('css',function(){
	return gulp.src('./src/css/*.css')
		.pipe(minifyCss())
		.pipe(rev())
		.pipe(gulp.dest('./dist/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./dist/rev/css'));
})

gulp.task('js', function() { //处理JS
	return gulp.src('./src/js/*.js')
		.pipe(uglify()) //压缩JS
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(gulp.dest('./dist/js')) //输出
		.pipe(rev.manifest())
		.pipe(gulp.dest('./dist/rev/js'));
});

gulp.task('minimg', function() {
    return gulp.src(['./src/img/*.png','./src/img/*.jpg','./src/img/*.gif'])
        // .pipe(rev())
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
        .pipe(rev.manifest()) //生成一个rev-manifest.json
        .pipe(gulp.dest('./dist/rev/img')); //将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('rev', function() {
    gulp.src(['./dist/rev/**/*.json', './src/index.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件                                  
        .pipe(revCollector({
            replaceReved: true,
        }))
        .pipe(htmlminify({ //-html压缩
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('./dist')); //- 替换后的文件输出的目录
});

gulp.task('revCss', function() {
    gulp.src(['./dist/rev/**/*.json', './dist/css/*.css']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件                                  
        .pipe(revCollector({
            replaceReved: true,
        }))
        
        .pipe(gulp.dest('./dist/css')); //- 替换后的文件输出的目录
});

gulp.task('revJs', function() {
    gulp.src(['./dist/rev/**/*.json', './dist/js/*.js']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件                                  
        .pipe(revCollector({
            replaceReved: true,
        }))
       
        .pipe(gulp.dest('./dist/js')); //- 替换后的文件输出的目录
});


gulp.task('build', function(cb) { // 按顺序执行完成后进行下一步
    runSequence('clean', ['css', 'js','minimg'], 'rev','revCss','revJs','watch', cb);
});


gulp.task('clean', function() { //构建前清除以前的文件
    return gulp.src(['./dist'], { read: false })
        .pipe(clean())
})

gulp.task('watch', function() {
	gulp.watch('./src/css/*.css', ['css']);
	gulp.watch('./src/js/*.js', ['js']);
});


gulp.task('default', ['build'],function() {
    console.log('构建完成！');
});
