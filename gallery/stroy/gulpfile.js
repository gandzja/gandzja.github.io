var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', async function () {
  return gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', async function() {
  gulp.watch('sass/**/*.sass', gulp.parallel('sass'));
});