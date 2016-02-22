'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');

var path = {
    build: {
        html: 'build/',
        js: 'build/js',
        css: 'build/css',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/sass/main.scss'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss'
    },
    clean: './build'
};


gulp.task('sass', function(){
    return gulp.src(path.watch.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) //������� ����� �� ������� ����
        .pipe(rigger()) //�������� ����� rigger
        .pipe(gulp.dest(path.build.html)) //�������� �� � ����� build
        //.pipe(reload({stream: true})); //� ������������ ��� ������ ��� ����������
});

gulp.task('sass:watch', function(){
    gulp.watch(path.watch.style,['sass'])
});

gulp.task('html:watch', function(){
    gulp.watch(path.watch.html,['html:' + 'build'])
});


gulp.task('default', ['sass','sass:watch','html:build','html:watch']);