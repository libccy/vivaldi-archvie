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
    panelswitch.appendChild(addressbar.querySelector('.button-toolbar.home'));

    var checkshow=function(){
        var indicator=addressfield.querySelector('progress');
        if(addressfield.classList.contains('focused')||
        addressfield.querySelector('.dialog-add-bookmark')){
            return true;
        }
        else if(indicator&&indicator.classList.contains('loading')){
            var value=parseInt(indicator.value);
            if(value>0&&value<100){
                return true;
            }
        }
        return false;
    };
    var hover=document.createElement('div');
    hover.id='addressbar-hover';
    var showing=false;
    hover.addEventListener('mouseenter',function(){
        if(showing) return;
        if(addressbar.classList.contains('tweak-show')){
            if(!checkshow()){
                addressbar.classList.remove('tweak-show');
                showing=true;
                setTimeout(function(){
                    showing=false;
                },500);
            }
        }
        else{
            addressbar.classList.add('tweak-show');
            showing=true;
            setTimeout(function(){
                showing=false;
            },500);
        }
    });
    document.body.querySelector('#browser').appendChild(hover);

    var observer = new MutationObserver(function(mutations) {
        if(checkshow()){
            addressbar.classList.add('tweak-show');
        }
        else{
            setTimeout(function(){
                if(!checkshow()){
                    addressbar.classList.remove('tweak-show');
                }
            },200);
        }
    });
    observer.observe(addressfield, {
        attributes:true,
        subtree:true
    });
}());
