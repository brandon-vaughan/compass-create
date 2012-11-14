/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-compass');

  // Project configuration.
  grunt.initConfig({

    compass: {
      watch: {
        files: [ 'sass/**/*.scss' ],
        tasks: [ 'compass:dev', 'compass:prod' ]
      },
      dev: {
        src: 'sass',
        dest: 'dev/css',
        linecomments: true,
        forcecompile: true,
        debugsass: true,
        images: 'images',
        relativeassets: true
      },
      prod: {
        src: 'sass',
        dest: 'stylesheets',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true,
        debugsass: false,
        images: 'images',
        relativeassets: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'compass');

};
