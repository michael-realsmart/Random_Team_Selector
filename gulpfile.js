var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    //svgmin = require('gulp-svgmin'),
    uglify = require('gulp-uglify');

var config = {
  outputLocation: 'dist',
  sourceLocation: 'src',
}

gulp.task("sass", function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', notify.onError(function (error) {
       return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
    })))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src(['./src/js/vendor/*.js', './src/js/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});


gulp.task("default", function(){
  livereload.listen();
  gulp.watch('./src/sass/**/*.scss', ["sass"]);
  gulp.watch('./src/js/**/*.js', ["js"]);
  //gulp.start("js");
  //gulp.start("sass");
});
