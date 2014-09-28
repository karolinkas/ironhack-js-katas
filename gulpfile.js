    //Gulp and plugins
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    watch       = require('gulp-watch'),
    runner      = require('gulp-mocha-phantomjs');


gulp.task('exercises:language:watcher', function() {
  gulp.watch('exercises/language/*_spec.js', ['exercises:language:builder', 'exercises:language:runner']);
});

gulp.task('exercises:language:builder', function() {
  gulp.src(['exercises/language/*.js'])
    .pipe(plumber())
    .pipe(concat('tests.js'))
    .pipe(gulp.dest('exercises/test_runner'))
});


gulp.task('exercises:language:runner', function () {
  gulp.src('exercises/test_runner/index.html')
    .pipe(plumber())
    .pipe(runner());
});

gulp.task('exercises:language', ['exercises:language:watcher']);
