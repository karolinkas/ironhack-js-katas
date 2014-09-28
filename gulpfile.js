    //Gulp and plugins
var gulp        = require('gulp'),
    mocha       = require('gulp-mocha'),
    plumber     = require('gulp-plumber'),
    watch       = require('gulp-watch');

gulp.task('exercises:language:runner', function() {
  gulp.src('exercises/language/*.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec', bail: true}));
});

gulp.task('exercises:language:watcher', function() {
  gulp.watch('exercises/language/*.js', ['exercises:language:runner']);
});

gulp.task('exercises:language', ['exercises:language:watcher']);
