/*This file is the
controller which will handle the business logic of your server side code. It will be invoked
from the routes you create in your appServer.js file.
*/
/*Your controller is the glue that is sent the
request from the route, opens the request (gets any information sent from the client) and then
works with the model, querying or changing the model as needed. The controller then usually
responds to the client with information requested or a confirmation that everything worked or
failed.*/
function User(id, first, last, email, password) {
	this.id = id;
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
}

function userSession() {
	this.uuid = guid();
	this.clickCount = 0;
	this.lastRequestTime = new Date.now();
}
let sessions = [];

exports.checkSession = function(sessionId) {
	if(sessions.length > 0) {
		for(let i in sessions) {
			if(sessions[i].uuid == sessionId) {
				return session[i];
			}
		}
	}
	return null;
}


var feedItem = require('../model/feedItem');

var feedItems = [];

var storyOne = feedItem.createFeedItem("Cheddar Goldfish found crushed by a robot in Petco", "Finn walks into Petco with his sister. Her name is Uwu. Uwu and Finn were on a mission to save their dad. There dad has been held captive in the fish tank for two days. They need their dad to survive. They ask the manager, Marty, if they will ever be able to get their dad back. Marty never liked their dad and now Marty does not like his kids either. Finn and Uwu walked out of Petco but before they could reach the door, Marty stepped right on them. ", "https://bit.ly/3IoLPPH", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
var storyTwo = feedItem.createFeedItem("Goldfish turns into canibal", "A Extra Cheddar Goldfish was watching his friends die from left to right. The master of all goldfish went crazy and started eating everyone. Finn did not know if he was going to make it out alive. He saw the smile on the master goldfish face and was very curious about how they tasted. He fell in love with the taste of his own kind. Now thats the snack that makes me smile back ;) Finn ate the Master and now has become the Master Goldfish. ", "https://bit.ly/3bVlgWc", "https://www.youtube.com/watch?v=HHk3pQxczYs");
var storyThree = feedItem.createFeedItem("Goldfish has a bestfriend who is a dog", "The Original Goldfish named Brooke lived with her parents. She was 5 months old. Ever since she was born she was bestfriends with the family dog named Ozzy.", "https://bit.ly/3nMhlO9", "google.com");

feedItems.push(storyOne);
feedItems.push(storyTwo);
feedItems.push(storyThree);


//function 1 = get a list of all feedItems 
exports.getFeedItems = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}
//function 2 = save a new feedItem to the list 
exports.saveFeedItem = function(req, res){
    let newFeedItem = feedItem.createFeedItem(req.title, req.body, req.imageUrl, req.linkUrl);
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}
//function 3 = get a particular feedItem by Id
exports.getParticularFeedItem = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.feedItemId]);
}
//function 4 = delete a particualr feedItem by Id 
exports.deleteFeedItem = function(req, res){
    feedItems.splice(req.params.feedItemsId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}
//function 5 = updated provided members of a feedItem by Id 
exports.updateFeedItem = (req, res) => {
    feedItems[req.params.feedItemId] = feedItem.createFeedItem(req.title, req.body, req.imageUrl, req.linkUrl);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}