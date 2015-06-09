'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var replace=require('gulp-replace');
var version='0.0.0.0';

gulp.task('html', ['inject'], function () {
  var htmlFilter = $.filter('**/*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(paths.tmp + '/serve/**/*.html')
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    //.pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    //.pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe(replace('<meta name="version" content="dev">','<meta name="version" content="'+version+'">'))
    //.pipe($.minifyHtml({
    //  empty: true,
    //  spare: true,
    //  quotes: true
    //}))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(paths.dist + '/views'))
    .pipe($.size({ title: paths.dist + '/', showFiles: true }));
});

gulp.task('assets', function () {
  return gulp.src(paths.src + '/assets/**/*')
    .pipe(gulp.dest(paths.dist + '/public/assets/'));
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2,otf}'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.dist + '/public/fonts/'));
});

gulp.task('misc', function () {
  return gulp.src(paths.src + '/**/*.ico')
    .pipe(gulp.dest(paths.dist + '/public'));
});

gulp.task('clean', function (done) {
  $.del([paths.dist + '/public/',paths.dist + '/views/', paths.tmp + '/'], done);
});

gulp.task('build', ['html', 'assets', 'fonts', 'misc'],function(){
  gulp.src(paths.dist + '/views/**').pipe(gulp.dest(paths.dist + '/public/'));
});
