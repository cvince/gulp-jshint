var gulp = require('gulp');
var gutil = require('gulp-util');

//require jshint
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  gulp.src('./test/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});