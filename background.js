/*
 * Google Serif-ifier
 *
 * A script injected into every Google URL that runs after DOM completion
 * to change all instances of the Google logo from the new sans-serif
 * design to the old, far superior serif logo.
 *
 * Written by and (c) 2015 Jake Glass; released under the MIT license
 * http://jake.glass
 *
 */

//get the SVG of the old logo from local resources for the extension
var serifLogoUrl = chrome.extension.getURL("google-logo-2013-official.svg");
var navLogoUrl = chrome.extension.getURL("google_nav_logo_composite.png");

console.log(navLogoUrl);

//access the homepage logo
var logo = document.getElementById("hplogo");

//access the nonHp sprite image set with thumbnail logo
var nonHpLogo = document.getElementById("logo");

//change the homepage logo, if we're on a homepage
if(logo){
	if(logo.tagName == "IMG") {
		logo.src = serifLogoUrl;
	}
	else {
		document.getElementById("hplogo").style.backgroundImage = "url(" + serifLogoUrl + ")";
	}
}

//change the non-homepage logo, a sprite navigation image set (always appears in DOM)
nonHpLogo.childNodes[0].src = navLogoUrl;

//change the "navend" in the footer, ie. GOOOOOOGLE, with the sprite nav set, one by one
//(this doesn't work 100% since most of the time, the search results content is loaded 
//separately from the header and I can't get any Event notifying us of that)

var navEndSpans = document.querySelectorAll(".csb");

for(var i = 0; i < navEndSpans.length; i++){
	navEndSpans[i].style.backgroundImage = "url(" + navLogoUrl + ")";
}