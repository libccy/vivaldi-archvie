# vivaldi

#####Usage
Copy the tweaks folder to the same directory as browser.html, then modify browser.html to enable a specific feature.<br>

Windows
````
$installdir/Application/1.0.174.8/resources/vivaldi
````
Mac
````
$installdir/Contents/versions/1.0.174.8/Vivaldi Framework/resources/vivaldi
````

#####White skin
Modify the color of addressbar and panel
````html
<link rel="stylesheet" href="custom/white/style.css" />
````
![](/screenshots/white.png?raw=true)

#####Modify menu position
Move the vivaldi menu to the addressbar when native window is enabled(only tested on windows).
````html
<link rel="stylesheet" href="custom/menu/style.css" />
````
![](/screenshots/menu.png?raw=true)

#####Tabs panel
Turns tab bar into a "panel", which behaves similarly to other panels(only tested on windows).
````html
<script src="custom/panel-tabs/main.js"></script>
````

Known issues:

1. The previous tweak(modify menu position) must be enabled
2. Tabs and panels must be set to left
3. Panel width is not adjustable
4. Toggling panels with menu or keyboard shortcuts doesn't work
5. Very likely to be incompatible with future releases

![](/screenshots/panel-tabs.png?raw=true)
