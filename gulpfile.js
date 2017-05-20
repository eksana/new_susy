var gulp=require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass_susy', function() {
  return gulp.src('src_test1/sass/**/*.scss')
      .pipe(sass({
          /*outputStyle: 'compressed',*/
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('src_test1/css'));
});

/*gulp.task('sass_shoko', function() {
 /* return gulp.src('src_shokolade/sass/***//*.scss')
      .pipe(sass({
          /*outputStyle: 'compressed',*/
          /*includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('src_shokolade/css'));
});*/

gulp.task('sass_shoko', function(){ // Создаем таск Sass
    return gulp.src('src_shokolade/sass/**/*.scss') // Берем источник
        //.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
         .pipe(sass({
          /*outputStyle: 'compressed',*/
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_shokolade/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('sass_mebel', function(){ // Создаем таск Sass
    return gulp.src('src_mebel/scss/**/*.scss') // Берем источник
        //.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
         .pipe(sass({
          /*outputStyle: 'compressed',*/
         
      }).on('error', sass.logError))
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_mebel/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
gulp.task('sass_chokoB', function(){ // Создаем таск Sass
    return gulp.src('src_shoko-bootstr/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        /* .pipe(sass({
          outputStyle: 'compressed',*/
          /*includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))*/
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_shoko-bootstr/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('sass_festival', function(){ // Создаем таск Sass
    return gulp.src('src_festival/scss/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        /* .pipe(sass({
          outputStyle: 'compressed',*/
          /*includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))*/
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_festival/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('sass_teplohod', function(){ // Создаем таск Sass
    return gulp.src('src_teplohod/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        /* .pipe(sass({
          outputStyle: 'compressed',*/
          /*includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))*/
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_teplohod/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});




gulp.task('sass_ucoz', function(){ // Создаем таск Sass
    return gulp.src('src_ucoz/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        /* .pipe(sass({
          outputStyle: 'compressed',*/
          /*includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))*/
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_ucoz/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('sass_wind', function(){ // Создаем таск Sass
    return gulp.src('src_window/sass/**/*.scss') // Берем источник
        //.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
         .pipe(sass({
          /*outputStyle: 'compressed',*/
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_window/css')); // Выгружаем результата в папку app/css
        //.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});