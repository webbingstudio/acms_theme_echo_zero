var gulp = require('gulp');

var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var theme_name = 'echo_zero';

// var project_dist = 'dist/';
// var project_dist = 'dist/wordpress/wp-content/themes/'+theme_name+'/';
// var project_dist = 'dist/mt/themes/'+theme_name+'/blog_static/';
var project_dist = 'dist/themes/'+theme_name+'/';

// sass
gulp.task('sass', function () {
  return gulp.src('_scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(project_dist+'css/'));
});

// cssmin
// sassの終了後に処理する
gulp.task('cssmin', ['sass'], function () {
  return gulp.src([
      project_dist+'css/**/*.css',
      '!'+project_dist+'css/**/*.min.css'
    ])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(project_dist+'css'));
});

// concat
gulp.task('concat', function() {
  return gulp.src([
      '_js/common/*.js'
    ])
    .pipe(plumber())
    .pipe(concat('common.js'))
    .pipe(gulp.dest(project_dist+'js'));
});

// uglify
// concatの終了後に処理する
gulp.task('uglify', ['concat'], function(){
  return gulp.src([
      project_dist+'js/**/*.js',
      '!'+project_dist+'js/**/*.min.js'
  ])
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(project_dist+'js'));
});

//watch
gulp.task('watch', function(){
  gulp.watch([
      '_scss/**/*.scss'
    ], function(event) {
    gulp.run('sass');
    gulp.run('cssmin');
  });
  gulp.watch([
      '_js/**/*.js'
    ], function(event) {
    gulp.run('concat');
    gulp.run('uglify');
  });
});

gulp.task('default', function(){
  gulp.run('watch');
});
