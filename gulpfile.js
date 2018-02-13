/*
* Dependencias
*/
var gulp = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    reload = browserSync.reload;

/*
* Configuración de la tarea 'default'
*/
gulp.task('default', function() {
    gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                'es2015',
                'react'
            ]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/dist'));
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("js/*.js").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});
//Creamos la tarea reactJs para todos nuestros archivos
gulp.task('reactJs', ['default']);
