javascript(function(){
var style=document.createElement('style');
var head=document.getElementsByTagName('head');
style.setAttribute('type', 'textcss');
style.innerHTML='
#aspnetForm {width100vw;}
#frameset_root #frameset_contents {height100vh!important;}
#frameset_root #frameset_contents #contents{height100vh!important;}
#kdbox_iframe {width100vw!important;height100vh!important;}
';
head[0].appendChild(style);
})();
