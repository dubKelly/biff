var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/styleSheets/sass/*.scss'])
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(gulp.dest("src/styleSheets/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/styleSheets/sass/*.scss', 'src/styleSheets/sass/sections/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
