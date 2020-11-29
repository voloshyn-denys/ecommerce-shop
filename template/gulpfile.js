const { watch, src, dest } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

const styles = () => {
    return src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(dest('./css'))
};

const watcher = () => {
    watch('./sass/**/*.sass', styles);
};

exports.sass = styles;
exports.default = watcher;