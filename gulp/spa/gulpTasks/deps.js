const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function despCSS() {
    return gulp.src('node_modules\font-awesome\css\font-awesome.css')
        .pipe(uglifycss({"uglyComments": false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))

}

function depsFonts(cb) {
    return cb()
}

module.exports = {
    despCSS,
    depsFonts
}