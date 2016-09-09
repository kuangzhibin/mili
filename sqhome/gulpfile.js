var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify');
gulp.task('less',function(){
  gulp.src('css/style.less')
      .pipe(less())
      .pipe(gulp.dest('css'))
      .pipe(notify({ message: 'less task complete' }));
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('css/style.less', ['less']);

});