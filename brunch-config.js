exports.config = {

	paths: {
		public: 'public',
		watched: ['app', 'vendor']
	},
	conventions: {
		assets: /(assets)/
	},
	modules: {
		wrapper: false,
		definition: false
	},
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': /^(vendor|bower_components)/
			},
			order: {
				before: [
					'bower_components/console-polyfill/index.js',
					'bower_components/jquery/dist/jquery.js',
				],
				after: [
					'vendor/js/bootstrap/tooltip.js',
					'vendor/js/bootstrap/popover.js',
					'vendor/js/bootstrap/collapse.js',
					'vendor/js/bootstrap/transition.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^(app|vendor|bower_components)/
			},
			order: {
				before: ['vendor/css/bootstrap']
			}
		},
		templates: {
			joinTo: 'js/app.js'
		}
	},
  sourceMaps: true
};