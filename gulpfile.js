    //Gulp and plugins
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    connect     = require('gulp-connect'),
    consolidate = require('gulp-consolidate'),
    gzip        = require('gulp-gzip'),
    less        = require('gulp-less'),
    minify      = require('gulp-minify-css'),
    plumber     = require('gulp-plumber'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    watch       = require('gulp-watch'),
    //Vinylfs
    source      = require('vinyl-source-stream');
    //Information to display on the page
    // page        = require('./data');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'public'
  });
});

gulp.task('livereload', function() {
  gulp.src([
      'public/styles/*.css',
      'public/**/*.html',
      'public/javascripts/*.js'
    ])
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('app/styles/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('public/styles'))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/styles'))
});

gulp.task('js:dependencies', function() {
  gulp.src([
      'app/javascripts/vendor/jquery.js',
      'app/javascripts/vendor/underscore.js',
      'app/javascripts/vendor/bootstrap.js'
    ])
    .pipe(plumber())
    .pipe(concat('application-dependencies.js'))
    .pipe(gulp.dest('public/javascripts'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/javascripts'))
});

gulp.task('js:application', function() {
  var bundler = watchify(browserify('./app/javascripts/app.js', watchify.args));

  function bundle () {
    return bundler.bundle()
      .pipe(source('bundle.js'))
      .pipe(rename({basename: 'app'}))
      .pipe(gulp.dest('public/javascripts'));
  }

  // Transforms
  bundler.transform(jadeify);

  // Watch
  bundler.on('update', bundle);
  return bundle();
});

gulp.task('home', function() {
  gulp.src('app/index.jade')
    .pipe(consolidate('jade', {pretty:true}))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('public'))
});

gulp.task('watch', function() {
  //Stylesheets
  gulp.watch('app/styles/*.less', ['less']);
  //JS dependencies
  gulp.watch('app/javascripts/vendor/*.js', ['js:dependencies']);
  //Pages
  gulp.watch('app/index.jade', ['home']);
  //Pages Contents
  gulp.watch('content/events.json', ['home']);
})

gulp.task('default', ['less', 'js:dependencies', 'js:application', 'home', 'webserver', 'livereload', 'watch']);
