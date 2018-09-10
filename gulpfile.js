// 获取 gulp
var gulp = require('gulp')

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
// 1. 找到文件
gulp.src('css/topBar.css')
// 2. 压缩文件
.pipe(minifyCSS())
// 3. 另存为压缩文件
.pipe(gulp.dest('dist/css'))
})