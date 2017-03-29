var gulp=require('gulp'),
sass = require('gulp-sass');

gulp.task('sass_susy', function() {
  return gulp.src('src_test1/sass/**/*.scss')
      .pipe(sass({
          /*outputStyle: 'compressed',*/
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('src_test1/css'));
});