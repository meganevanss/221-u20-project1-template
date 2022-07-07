//create location function 
/* Calling your gotToLocation() with a url passed as a parameter requires you to embed
the call to the geoLocation() function within a function!*/

// These get run when any page moves to another.
function goToLocation(location) {
	window.location = location; //change to page passed.
}

