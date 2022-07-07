/*create 2 event w3c style event handlers , 
one for spacebar being pressed(using checkKeyPress function)
and other for themouse click on the "fade_text" element*/

/*Both of the events should call the goToLocation() function in global.js 
and pass the url feed for the feed.html page 
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */

/*Remember that since the index.html page has working
links to both index.js and global.js these client side JavaScript files can “see” functions and
global variables in each other.*/


function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

window.addEventListener("keypress" , checkKeyPress);
document.getElementById("fade_text"). addEventListener("click", () => goToLocation('/feed'));
