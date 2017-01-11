/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    var srcPath = 'public_html/app/';
    var distJsPath = 'dist/angular-phonecat/app.js';
    var distPath = 'dist/angular-phonecat/';
    console.log(srcPath);
    grunt.initConfig({
        srcPath: srcPath,
        distJsPath: distJsPath,
        distPath: distPath,
        concat: {
            options: {
                sourceMap: false,
                separator: '\n',
                stripBanners: true
            },
            js: {
                src: ['<%=srcPath%>/*.module.js', '<%=srcPath%>/*.config.js',
                    '<%= srcPath %>/**/*.module.js', '<%= srcPath %>/**/*.js'
                ],
                dest: '<%=distJsPath %>'
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: '<%= srcPath %>/',
                        src: ['*.html', '*.css'],
                        dest: '<%= distPath %>/'
                    }, {
                        expand: true,
                        cwd: '<%= srcPath %>/',
                        src: ['*/**/*.html'],
                        dest: '<%= distPath %>/',
                        filter: 'isFile'
                    }, {
                        expand: true,
                        cwd: '<%= srcPath %>/',
                        src: ['phones/*', 'img/**/*'],
                        dest: '<%= distPath %>/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '<%= srcPath%>/../',
                        src: ['lib/*','bootstrap/**/*'],
                        dest: '<%= distPath %>/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        processhtml: {
            options: {
                process: true
            },
            dist: {
                files: {
                    '<%= distPath %>/index.html': ['<%= distPath %>/index.html']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'dist/angular-phonecat/',
                     keepalive: true
                }
            }
        },
        clean: {
            build: ['dist/*']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['clean','concat','copy', 'processhtml','connect']);
     grunt.registerTask('build', ['clean','concat','copy', 'processhtml']);
      grunt.registerTask('build1', ['clean','concat','copy']);
};
