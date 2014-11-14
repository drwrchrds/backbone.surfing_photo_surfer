module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
          src: [
              'javascripts/vendor/jquery-2.1.1.min.js',
              'javascripts/vendor/underscore-min.js',
              'javascripts/vendor/backbone-min.js',
              'javascripts/vendor/masonry.pkgd.min.js',
              'javascripts/vendor/imagesloaded.pkgd.min.js',
              'javascripts/vendor/modal.js',
              'javascripts/application.js',
              'javascripts/models/*.js',
              'javascripts/collections/*.js',
              'javascripts/views/*.js',
              'javascripts/router.js'
          ],
          dest: 'javascripts/build/production.js'
      }
    },

    uglify: {
      build: {
          src: 'javascripts/build/production.js',
          dest: 'javascripts/build/production.min.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

}
