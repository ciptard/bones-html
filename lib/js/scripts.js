/******************************************************************
Site Name: Site Name Here
Author: Your Name Here

Site Scripts 
******************************************************************/

// Modernizr.load loading the right scripts only if you need them
Modernizr.load([
	{
    // Let's see if we need to load selectivizr
    test : Modernizr.borderradius,
    // Modernizr.load loads selectivizr and Respond.js for IE6-8
    nope : ['libs/selectivizr-min.js']
	}
]); /* end Modernizr load script */

// lets use Modernizr to load social scripts only if it's not mobile
/*
Mobile devices don't need the 30 or so resources loaded
by social scripts, so let's only load them if we're on a
larger connection. For more, check out these links:
https://gist.github.com/1025811 
http://jsfiddle.net/eddiemachado/MH5qe/6/
*/
if (matchMedia('screen and (min-width: 481px)').matches) {
    /*
    Code supplied from: https://gist.github.com/1025811
    */
    (function(doc, script) {
        var js, 
            fjs = doc.getElementsByTagName(script)[0],
            frag = doc.createDocumentFragment(),
            add = function(url, id) {
                if (doc.getElementById(id)) {return;}
                js = doc.createElement(script);
                js.src = url;
                id && (js.id = id);
                frag.appendChild( js );
            };
        
        // Google+ button
        add('https://apis.google.com/js/plusone.js');
        // Facebook SDK
        add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=1234567890', 'facebook-jssdk');
        // Twitter SDK
        add('//platform.twitter.com/widgets.js');
    
        fjs.parentNode.insertBefore(frag, fjs);
    }(document, 'script'));
    
} /* end Modernizr polyfill */


// as the page loads, call these scripts
$(document).ready(function() {

	
	
	// add all your scripts here

 
}); /* end of as page load scripts */