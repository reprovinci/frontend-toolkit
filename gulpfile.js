'use strict';

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const rename = require('gulp-rename');

// sass – render scss > css
gulp.task('sass', function () {
  return gulp.src('./src/scss/frontend-toolkit.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
});