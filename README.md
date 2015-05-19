# vivaldi tweaks

###Usage
Copy the tweaks folder to the same directory as browser.html, then modify browser.html to enable a specific tweak.
````
Windows: $installdir/Application/1.0.178.2/resources/vivaldi<br>
Mac: $installdir/Contents/versions/1.0.178.2/Vivaldi Framework/resources/vivaldi
````
If you are not sure where to put the code, paste them under this line
````html
<script src="bundle.js"></script>
````

###Popup tabs
Show tabbar when hovering the icon on the sidebar and hide tabbar when mouse leaves it.
````html
<script src="tweaks/popup-tabs/main.js"></script>
````
![](/screenshots/addressbar.png?raw=true)

###Audo-hide addressbar
Show addressbar only when focused or page loading
````html
<script src="tweaks/addressbar/main.js"></script>
````
![](/screenshots/addressbar.png?raw=true)

###Cycle tabs
Cycle through tabs by right-click+mousewheel
````html
<script src="tweaks/cycle-tabs/main.js"></script>
````
![](/screenshots/cycle-tabs.png?raw=true)

###White skin
Modify the color of addressbar and panel.
````html
<link rel="stylesheet" href="tweaks/white/style.css" />
````
![](/screenshots/white.png?raw=true)

###Menu mod
Move the vivaldi menu to the addressbar when native window is enabled(only tested on windows).
````html
<link rel="stylesheet" href="tweaks/menu/style.css" />
````
![](/screenshots/menu.png?raw=true)

###Tabs panel
Turn tab bar into a "panel", which behaves similarly to other panels(only tested on windows).
````html
<script src="tweaks/panel-tabs/main.js"></script>
````

Current issues

* The previous tweak(menu mod) must be enabled
* Tabs and panels must be set to left
* Panel width is not adjustable
* Toggling panels with menu or keyboard shortcuts doesn't work
* Very likely to be incompatible with future releases

![](/screenshots/panel-tabs.png?raw=true)
