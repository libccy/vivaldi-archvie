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

        // var addressbar=document.body.querySelector('.toolbar-addressbar');

        var show=function(){
            tabbar.classList.add('tweak-show');
            tabbar.style.zIndex=1;
            tabbutton.classList.add('hoveractive');
            if(timeout){
                clearTimeout(timeout);
            }
            // addressbar.classList.add('tweak-show');
        };
        var hide=function(e){
            if(e&&e.x<214) return;
            tabbar.classList.remove('tweak-show');
            tabbutton.classList.remove('hoveractive');
            timeout=setTimeout(function(){
                tabbar.style.zIndex=-1;
            },200);
        };
        tabbutton.addEventListener('mouseenter',show);
        tabbar.addEventListener('mouseleave',hide);
    });
}());
