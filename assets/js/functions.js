(function($){
	$(document).ready(function (){
		var clip;
		$.contextMenu({
			selector: '.test',
			callback: function(key, options) {
				if(key == 'copy'){
					var copyCtx = options.$trigger.context;
					var data = $(copyCtx).data('title');
					clip.setText(data);
				}
			},
			items: {
				"copy": {name: "复制", icon: "copy"}
			}
		});
		clip = new ZeroClipboard($(".icon-copy"));
	});
})(window.jQuery);