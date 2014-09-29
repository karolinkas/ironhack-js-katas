    //Gulp and plugins
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    rename      = require('gulp-rename'),
    template    = require('gulp-template-compile'),
    watch       = require('gulp-watch'),
    runner      = require('gulp-mocha-phantomjs');


gulp.task('exercises:dom:watcher', function() {
  gulp.watch('exercises/dom/*_spec.js', ['exercises:dom:builder', 'exercises:dom:runner']);
});

gulp.task('exercises:templates:watcher', function() {
  gulp.watch('exercises/dom/templates/**/*.html', ['exercises:template:builder', 'exercises:dom:runner']);
})

gulp.task('exercises:language:watcher', function() {
  gulp.watch('exercises/language/*_spec.js', ['exercises:language:builder', 'exercises:language:runner']);
});


gulp.task('exercises:dom:builder', function() {
  gulp.src([
      'exercises/dom/helpers/*.js',
      'exercises/dom/*.js'
    ])
    .pipe(plumber())
    .pipe(concat('tests.js'))
    .pipe(gulp.dest('exercises/test_runner'))
});

gulp.task('exercises:template:builder', function() {
  gulp.src(['exercises/dom/templates/**/*.html'])
    .pipe(plumber())
    .pipe(rename({extname:''}))
    .pipe(template())
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('exercises/test_runner'))
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

gulp.task('exercises:dom:runner', function () {
  gulp.src('exercises/test_runner/index.html')
    .pipe(plumber())
    .pipe(runner());
});

gulp.task('exercises:language', [
  'exercises:language:watcher',
  'exercises:language:builder',
  'exercises:language:runner'
]);

gulp.task('exercises:dom', [
  'exercises:dom:watcher',
  'exercises:templates:watcher',
  'exercises:dom:builder',
  'exercises:template:builder',
  'exercises:dom:runner'
]);
