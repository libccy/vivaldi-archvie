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

        tabbutton.addEventListener('mouseover',function(){
            tabbar.classList.toggle('tweak-show');
        });
        tabbar.addEventListener('mouseleave',function(){
            this.classList.remove('tweak-show');
        });
    });
}());
