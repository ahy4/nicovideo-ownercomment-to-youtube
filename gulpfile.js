const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const computeDuration = (ms) => { // [ミリ秒]を[時:分:秒,ミリ秒]に変換
  var h = String(Math.floor(ms / 3600000) + 100).substring(1);
  var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
  var s = String(Math.floor((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
  var ms = String(ms % 1000);
  return h+':'+m+':'+s+','+ms;
};

const replacer = (function () {
  let i = 1;
  return (match, second, command, message) => {
    const start = computeDuration(Number(second)*1000);
    const end = computeDuration((Number(second)+3)*1000);
    const parsedLines = (
      `${i++}\n` +
      `${start} --> ${end}\n` +
      message + "\n"
    );
    return parsedLines;
  };
}());

gulp.task('default', () => {
  gulp.src(['src/*', '!src/.gitkeep'])
    .pipe(replace(/^(\d*[.]\d*):([^:]*):(.*)/gm, replacer))
    .pipe(rename({ extname: ".srt" }))
    .pipe(gulp.dest('./dist'));
});

