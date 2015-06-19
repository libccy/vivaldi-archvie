(function(){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href='tweaks/cycle-tabs/style.css';
    document.head.appendChild(link);
}());

(function(){
    'use strict';
    var dispatchMouseEvent = function(target, var_args) {
		var e = document.createEvent("MouseEvents");
		e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
		target.dispatchEvent(e);
	};

    var browser=document.body.querySelector('#browser');
    var container=document.createElement('div');
    container.id='cycle-tabs-container';
    container.classList.add('hidden');
    var cycle=document.createElement('div');
    cycle.classList.add('quick-command-container');
    container.appendChild(cycle);

    browser.appendChild(container);

    var order=0;
    var scripts=document.body.querySelectorAll('script');
    for(var i=0;i<scripts.length;i++){
        var src=scripts[i].src;
        if(src.indexOf('tweaks/cycle-tabs/main.js')!==-1){
            if(scripts[i].src.indexOf('order=1')!==-1){
                order=1;
            }
            break;
        }
    }


    var right=false;
    var current=null;
    var clear=function(){
        right=false;
        current=null;
        container.classList.add('hidden');
    };
    var recent=function(tab){
        var page=document.querySelector('.webpageview webview[tab_id="'+tab.dataset.tabId+'"]');
        if(page){
            page=page.parentNode.parentNode.parentNode.parentNode;
            return parseInt(page.style.zIndex);
        }
        return 0;
    };
    var show=function(){
        var tabs=browser.querySelectorAll('#tabs>.tab');
        cycle.innerHTML='';
        var list=[];
        for(var i=0;i<tabs.length;i++){
            list.push(tabs[i]);
        }
        if(!order){
            list.sort(function(a,b){
                return recent(b)-recent(a);
            });
        }
        for(i=0;i<list.length;i++){
            var node=list[i].cloneNode(true);
            node._cycleLink=list[i];
            cycle.appendChild(node);
        }
        container.classList.remove('hidden');
    };
    document.addEventListener('mousedown',function(e){
        if(!right&&e.button===2){
            right=true;
            current=e;
            e.preventDefault();
            e.stopPropagation();
        }
        else{
            clear();
        }
    });
    document.addEventListener('mousemove',function(e){
        if(right&&current){
            var dx=e.x-current.x;
            var dy=e.y-current.y;
            if(Math.sqrt(dx*dx+dy*dy)>=10){
                clear();
            }
        }
    });
    document.addEventListener('mouseup',function(e){
        if(right){
            var active=container.querySelector('.tab.active');
            if(active){
                dispatchMouseEvent(active._cycleLink, 'mouseenter', true, true);
                dispatchMouseEvent(active._cycleLink, 'mousedown', true, true);
                dispatchMouseEvent(active._cycleLink, 'mouseup', true, true);
                dispatchMouseEvent(active._cycleLink, 'click', true, true);
                dispatchMouseEvent(active._cycleLink, 'mouseleave', true, true);
            }
        }
        clear();
    });
    document.addEventListener('mousewheel',function(e){
        if(right){
            if(container.classList.contains('hidden')){
                show();
            }
                var active=container.querySelector('.tab.active');
                if(active){
                    active.classList.remove('active');
                    if(e.detail > 0 || e.wheelDelta < 0){
                        if(active.nextSibling){
                            active.nextSibling.classList.add('active');
                        }
                        else{
                            active.parentNode.firstChild.classList.add('active');
                        }
                    }
                    else{
                        if(active.previousSibling){
                            active.previousSibling.classList.add('active');
                        }
                        else{
                            active.parentNode.lastChild.classList.add('active');
                        }
                    }
                }

            e.preventDefault();
            e.stopPropagation();
        }
    });
}());
