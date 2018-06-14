define.amd={
	jQuery:true
};
Module.config(function(name,from){
	if(name=="jquery"){
		var url;
		if(('onmouseenter' in document) && (document.addEventListener)){
			url="https://cdn.bootcss.com/jquery/2.2.4/jquery.js"
		}else{
			url="https://cdn.bootcss.com/jquery/1.12.4/jquery.js";
		}
		var module=Module.getCache(url);
		if(!module){
			module=new Module(name);
			Module.setCache(name,module);
			Module.setCache(url,module);
			module.init(url);
		}
		return module;
	}
});