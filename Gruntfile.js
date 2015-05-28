module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint','uglify','watch']);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'jquery.jqDock.js'],
      options: {
        laxbreak: true,
        globals: {
          jQuery: true,
        }
      }
    },
    uglify: {
      build: {
        files: {
          'jquery.jqDock.min.js': ['jquery.jqDock.js']
        }
      }
    },    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['default']
    }
  });

};
