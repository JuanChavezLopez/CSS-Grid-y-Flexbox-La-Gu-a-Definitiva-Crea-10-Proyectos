const gulp = require('gulp'),
     sass = require('gulp-sass'),
     autoprefixer = require('gulp-autoprefixer');

 gulp.task('sass', () => {
    gulp.src('scss/app.scss')
    .pipe(autoprefixer({

    }))
    .pipe(sass({
        includePaths: ['scss']
    }))
    .pipe(gulp.dest('css'));

 });

 gulp.task('watch', () => {
     gulp.watch(['scss/app.scss'], gulp.series(['sass']));
 });