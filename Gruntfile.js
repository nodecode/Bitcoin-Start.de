module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.html': 'src/index.html',
				}
			},
		},
		cssmin: {
			minify: {
				src: ['src/css/bootstrap.min.css', 'src/css/bootstrap-theme.min.css', 'src/css/font-awesome.min.css', 'src/css/fonts.css', 'src/css/style.css'],
				dest: 'build/style.css'
			}
		},
		jshint: {
			files: ['src/js/script.js']
		},
		uglify: {
			minify: {
				files: {
					'build/script.js': ['src/js/jquery.min.js', 'src/js/bootstrap.min.js', 'src/js/script.js']
				}
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src/',
				src: ['favicon.ico', 'img/*', 'fonts/*'],
				dest: 'build/'
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Default task(s).
	grunt.registerTask('default', ['htmlmin', 'cssmin', 'jshint', 'uglify', 'copy']);
};