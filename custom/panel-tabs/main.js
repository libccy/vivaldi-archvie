(function(){
    'use strict';
    var panelswitch=document.querySelector('#switch');
    if(panelswitch){
        var link=document.createElement('link');
        link.rel='stylesheet';
        link.href='custom/panel-tabs/style.css';
        document.head.appendChild(link);
        var tabs=document.createElement('button');
        tabs.title='Tabs';
        tabs.className='tabs active';
        panelswitch.appendChild(tabs);
        var container=panelswitch.parentNode.parentNode;
        var temp=false;

        var closeActive=function(){
            var active=panelswitch.querySelector('button.active:not(.tabs)');
            if(active){
                temp=true;
                active.click();
                temp=false;
            }
            container.classList.add('custom-tabs');
        };
        panelswitch.addEventListener('click',function(e){
            if(temp) return;
            for(var i=0;i<e.path.length;i++){
                if(e.path[i].tagName&&e.path[i].tagName.toLowerCase()==='button'){
                    var button=e.path[i];
                    var tabscontainer=document.querySelector('#tabs-container');
                    if(tabscontainer){
                        if(!button.classList.contains('tabs')){
                            tabscontainer.style.display='none';
                            tabs.classList.remove('active');
                            setTimeout(function(){
                                if(button.classList.contains('active')){
                                    container.classList.remove('hidden');
                                    container.classList.remove('custom-tabs');
                                }
                                else{
                                    container.classList.add('custom-tabs');
                                    container.classList.add('hidden');
                                }
                            });
                        }
                        else{
                            button.classList.toggle('active');
                            if(button.classList.contains('active')){
                                closeActive();
                                tabscontainer.style.display='';
                                container.classList.remove('hidden');
                            }
                            else{
                                tabscontainer.style.display='none';
                                container.classList.add('hidden');
                            }
                        }
                    }
                    return;
                }
            }
        });
    }
}());
