(function(){
    'use strict';
    var tabs=document.body.querySelector('#tabs');
    var scripts=document.body.querySelectorAll('script');
    var num=1;
    for(var i=0;i<scripts.length;i++){
        var src=scripts[i].src;
        if(src.indexOf('tweaks/userjs/main.js')!==-1){
            if(src.indexOf('?num=')!==-1){
                num=parseInt(src.slice(src.indexOf('?num=')+5));
            }
        }
    }
    var count=0;
    var list=[];
    var scriptload=function(){
        list.push(window.userjs);
        window.userjs={};
    };
    window.userjs={};
    for(i=1;i<=num;i++){
        var script=document.createElement('script');
        script.src='tweaks/userjs/'+i+'.js';
        document.head.appendChild(script);
        script.addEventListener('load',scriptload);
    }
    var observer = new MutationObserver(function(mutations) {
        var pages=tabs.querySelectorAll('.tab');
        for(var i=0;i<pages.length;i++){
            if(!pages[i]._userjsloaded){
                pages[i]._userjsloaded=true;
                var page=document.querySelector('.webpageview webview[tab_id="'+pages[i].dataset.tabId+'"]');
                if(page){
                    page.addContentScripts([{
                        name: 'myRule',
                        // matches: ['http://www.foo.com/*'],
                        // css: { files: ['mystyles.css'] },
                        js: { files: ['1.js'] },
                        run_at: 'document_start'
                    }]);
                }
            }
        }
    });
    observer.observe(tabs, {
        childList:true
    });
}());
