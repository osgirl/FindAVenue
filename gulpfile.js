var gulp = require('gulp');

var less = require('gulp-less');
var rename = require("gulp-rename");

var LessPluginCleanCSS = require('less-plugin-clean-css'),
cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});


// Parse LESS and compress to style.min.css
gulp.task('less', function () {
 return gulp.src('./src/assets/less/styles.less')
  .pipe(less({
    plugins: [cleanCSSPlugin]
  }))
  .pipe(rename("styles.min.css"))
  .pipe(gulp.dest('./dist/css/'));
});

// Watch all the above tasks
gulp.task('watch', function(){
  gulp.watch('./src/assets/less/**/*.less', ['less']);
});


gulp.task('default', ['watch']);