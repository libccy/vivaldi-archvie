(function(){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href='tweaks/popup-tabs/style.css';
    document.head.appendChild(link);
}());

(function(){
    'use strict';
    window.addEventListener('load',function(){
        var panelswitch=document.querySelector('#switch');

        var tabbutton=document.createElement('button');
        tabbutton.className='tabs';
        panelswitch.appendChild(tabbutton);

        var tabbar=document.querySelector('#tabs-container');
        var timeout=null;

        var show=function(){
            tabbar.classList.add('tweak-show');
            tabbar.style.zIndex=1;
            tabbutton.classList.add('hoveractive');
            if(timeout){
                clearTimeout(timeout);
            }
        };
        var hide=function(){
            tabbar.classList.remove('tweak-show');
            tabbutton.classList.remove('hoveractive');
            timeout=setTimeout(function(){
                tabbar.style.zIndex=-1;
            },200);
        };
        tabbutton.addEventListener('mouseenter',show);
        tabbar.addEventListener('mouseleave',hide);

        var newtab=tabbar.querySelector('.newtab');
        newtab.addEventListener('mousedown',function(e){
            if(e.button===1){
                this.click();
            }
        });
    });
}());
