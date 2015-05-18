(function(){
    'use strict';
    var dispatchMouseEvent = function(target, var_args) {
		var e = document.createEvent("MouseEvents");
		e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
		target.dispatchEvent(e);
	};

    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href='tweaks/cycle-tabs/style.css';
    document.head.appendChild(link);

    var browser=document.body.querySelector('#browser');
    var container=document.createElement('div');
    container.id='cycle-tabs-container';
    container.classList.add('hidden');
    var cycle=document.createElement('div');
    cycle.classList.add('quick-command-container');
    container.appendChild(cycle);

    browser.appendChild(container);


    var right=false;
    var current=null;
    var clear=function(){
        right=false;
        current=null;
        container.classList.add('hidden');
    };
    var show=function(){
        var tabs=browser.querySelectorAll('#tabs>.tab');
        cycle.innerHTML='';
        for(var i=0;i<tabs.length;i++){
            var node=tabs[i].cloneNode(true);
            node._cycleLink=tabs[i];
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
                dispatchMouseEvent(active._cycleLink, 'mouseover', true, true);
                dispatchMouseEvent(active._cycleLink, 'mousedown', true, true);
                dispatchMouseEvent(active._cycleLink, 'click', true, true);
                dispatchMouseEvent(active._cycleLink, 'mouseup', true, true);
            }
        }
        clear();
    });
    document.addEventListener('mousewheel',function(e){
        if(right){
            if(container.classList.contains('hidden')){
                show();
            }
            else{
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
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });
}());
