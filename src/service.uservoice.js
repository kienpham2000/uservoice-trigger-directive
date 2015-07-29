'use strict';

angular
	.module('service.uservoice', [])
	.factory('UserVoice', function ($window) {
		$window.UserVoice = $window.UserVoice || [];

		// Inject UserVoice script into DOM
		// jscs:disable
		/* jshint ignore:start */
		(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/T1twXffk8kRFxQHuFsXBqA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();
		/* jshint ignore:end */
		// jscs:enable

		// To avoid calling the incorrect instance of UserVoice, we use apply
		// to explicitly pass the correct UserVoice instance and the given
		// arguments on method call
		return {
			push: function () {
				$window.UserVoice.push.apply($window.UserVoice, arguments);
			}
		};
	})
;
