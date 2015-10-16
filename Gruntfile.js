module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: 'src/javascript.js',
        tasks: ['jshint:all', 'copy:js']
      },
      html: {
        files: 'src/index.html',
        tasks: ['copy:html']
      },
      css: {
        files: 'src/stylesheet.css',
        tasks: ['copy:css']
      }
    },

    copy: {
      js: {
        files: [ { expand: true, cwd: 'src/', src: ['javascript.js'], dest: 'build/' } ]
      },
      html: {
        files: [ { expand: true, cwd: 'src/', src: ['index.html'], dest: 'build/' } ]
      },
      css: {
        files: [ { expand: true, cwd: 'src/', src: ['stylesheet.css'], dest: 'build/' } ]
      },
      images: {
        files: [ { expand: true, cwd: 'images/', src: ['*'], dest: 'build/assets/images/'}]
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/javascript.js']
    },

    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      build: {
        options: {
          destPrefix: 'build/assets'
        },
        files: {
          'jquery.min.js': 'jquery/dist/jquery.min.js',
          'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
          'bootstrap/bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
          'bootstrap/fonts': 'bootstrap/dist/fonts'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    },

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'build/application.js': ['build/assets/jquery.min.js', 'build/assets/javascript.js', 'build/assets/**/*.js']
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'build/application.css': ['build/**/*.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //grunt.registerTask('production', ['uglify', 'cssmin', 'connect']);
  grunt.registerTask('default', ['bowercopy', 'copy', 'connect', 'watch']);
};
