const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProjec = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProjec.src()
        .pipe(tsProjec())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)