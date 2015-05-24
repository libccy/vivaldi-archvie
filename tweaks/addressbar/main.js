(function(){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href='tweaks/addressbar/style.css';
    document.head.appendChild(link);
}());

(function(){
    'use strict';
    var addressbar=document.body.querySelector('.toolbar-addressbar');
    var addressfield=addressbar.querySelector('.addressfield');

    var panelswitch=document.body.querySelector('#switch');
    panelswitch.appendChild(addressbar.querySelector('.button-toolbar.back'));
    panelswitch.appendChild(addressbar.querySelector('.button-toolbar.forward'));
    panelswitch.appendChild(addressbar.querySelector('.button-toolbar.reload'));

    var home=addressbar.querySelector('.button-toolbar.home');
    panelswitch.appendChild(home);
    home.addEventListener('mouseenter',function(){
        addressbar.classList.toggle('tweak-show');
    });

    var observer = new MutationObserver(function(mutations) {
        var bool=false;
        var indicator=addressfield.querySelector('progress');
        if(addressfield.classList.contains('focused')||
        addressfield.querySelector('.dialog-add-bookmark')){
            bool=true;
        }
        else if(indicator&&indicator.classList.contains('loading')){
            var value=parseInt(indicator.value);
            if(value>0&&value<100){
                bool=true;
            }
        }
        if(bool){
            addressbar.classList.add('tweak-show');
        }
        else{
            addressbar.classList.remove('tweak-show');
        }
    });
    observer.observe(addressfield, {
        attributes:true,
        subtree:true
    });
}());
