// http://kb.imakewebsites.ca/2014/01/04/new-node-wishlist/
// http://www.sitepoint.com/deploying-heroku-using-gulp-node-git/

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('server', function () {
    nodemon({
        script: 'bin/www',
        ext: 'js html css',
        env: { 'DEBUG': 'TBD' }
    })
});

gulp.task('js', function(){
    browserify('./public/javascripts/components/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('sass', function() {
    gulp.src('public/stylesheets/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/stylesheets/css'));
})

gulp.task('watch', function() {
    gulp.watch("public/javascripts/components/**/*.jsx", ["js"])
    gulp.watch("public/stylesheets/scss/*.scss", ["sass"]);
})

gulp.task('default', ['js', 'sass', 'watch', 'server']);

